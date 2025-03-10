import AtomTheme from "../templates/AtomTheme";
import LightTheme from "../templates/LightTheme";
import BoldTheme from "../templates/BoldTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import { Templates } from "../constants";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import slugify from "slugify";
import LogInModal from "./logInModal";
import { useNavigate } from "react-router-dom";

const env = import.meta.env.VITE_BASE_API_URL;

const TemplateSwitch = ({ templateId, data, onClickPrev }) => {
  const themes = {
    [Templates.AtomTheme]: <AtomTheme data={data} />,
    [Templates.LightTheme]: <LightTheme data={data} />,
    [Templates.BoldTheme]: <BoldTheme data={data} />,
    [Templates.GreyTheme]: <GreyTheme data={data} />,
    [Templates.DarkTheme]: <DarkTheme data={data} />,
  };
  const { getToken, isAuthenticated } = useContext(AuthContext);
  const [portfolio, setPortfolio] = useState(null);
  const navigate = useNavigate();
  const currentTheme = themes[templateId] || <h1>Template not found</h1>;

  const { aboutMe, country, email, gitHub, linkedIn, name, jobTitle } =
    data.personalInfo;

  const { company, role, roleDescription, yearFrom, yearTo } =
    data.professionalSummary;

  const { description, link, title } = data.projects;

  const { backEnd, frontEnd, otherTools } = data.skills;

  const generateSlug = (name) => {
    return slugify(name, {
      lower: true, // Convert to lowercase
      strict: true, // Remove special characters
      trim: true, // Trim whitespace
    });
  };

  // Generate unique slug with random ID to avoid duplicates
  const generateUniqueSlug = (name) => {
    const baseSlug = generateSlug(name);
    const randomId = Math.random().toString(36).substring(2, 6);
    return `${baseSlug}-${randomId}-${templateId}`;
  };

  console.log(generateUniqueSlug(name));

  const portfolioData = {
    slug: generateUniqueSlug(name),
    name,
    gitHub,
    linkedIn,
    email,
    country: country.label,
    title: jobTitle,
    about: aboutMe,
    experience: [
      {
        role,
        company,
        duration: {
          from: yearFrom,
          to: yearTo,
        },
        description: roleDescription,
      },
    ],
    projects: [
      {
        title,
        description,
        link,
      },
    ],
    skills: [
      {
        skillType: "FrontEnd",
        skills: frontEnd.map((skill) => {
          return skill.value;
        }),
      },
      {
        skillType: "BackEnd",
        skills: backEnd.map((skill) => {
          return skill.value;
        }),
      },
      {
        skillType: "OtherTools",
        skills: otherTools.map((skill) => {
          return skill.value;
        }),
      },
    ],
    template: templateId,
    imageUrl: data.imageUrl,
    published: true,
  };

  console.log(portfolioData);

  const handleSubmit = () => {
    axios
      .post(`${env}/portfolios`, portfolioData, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((response) => {
        // alert("Portfolio Published Successfully! 🎉");
        console.log(response);
        setPortfolio(response.data);
        navigate("/portfolios");
      })
      .catch((error) => {
        alert("Failed to publish portfolio. ❌");
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-20 w-full">
        {/* Left-aligned Previous Step button */}
        <div className="flex-1">
          <button
            className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            onClick={onClickPrev}
          >
            Previous step
          </button>
        </div>

        {/* Right-aligned: Either Publish button or Login Modal */}
        <div className="flex-1 flex justify-end">
          {isAuthenticated ? (
            <button
              onClick={handleSubmit}
              className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            >
              Publish
            </button>
          ) : (
            <LogInModal />
          )}
        </div>
      </div>

      {currentTheme}
    </div>
  );
};

export default TemplateSwitch;
