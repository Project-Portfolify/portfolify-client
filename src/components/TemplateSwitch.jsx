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
import { useNavigate } from "react-router-dom";


const env = import.meta.env.VITE_BASE_API_URL;

const TemplateSwitch = ({ templateId, data={}, onClickPrev}) => {
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
    data?.personalInfo || {};

  const { company, role, roleDescription, yearFrom, yearTo } =
    data?.professionalSummary || {};

  const { description, link, title } = data?.projects || {};

  const { backEnd, frontEnd, otherTools } = data?.skills || {};

  const generateSlug = (name) => {
    if (!name || typeof name !== "string") {
      return slugify("default-name", {
        lower: true,
        strict: true,
        trim: true,
      });
    }
    return slugify(name, {
      lower: true,
      strict: true,
      trim: true,
    });
  };
  
  const generateUniqueSlug = (name) => {
    const baseSlug = generateSlug(name || "default-name");
    const randomId = Math.random().toString(36).substring(2, 6);
    // Use a fallback for templateId if it's undefined.
    return `${baseSlug}-${randomId}-${templateId || "defaultTemplate"}`;
  };
  
  console.log(generateUniqueSlug(name || "default-name"));

  const portfolioData = {
    slug: generateUniqueSlug(name || "default-name"),
    name: name || "Unknown",
    gitHub,
    linkedIn,
    email,
    country: country?.label || "Unknown", 
    title:jobTitle,
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
        skills: frontEnd?.map(skill => skill.value) || [],
      },
      {
        skillType: "BackEnd",
        skills: backEnd?.map(skill => skill.value) || [],
      },
      {
        skillType: "OtherTools",
        skills: otherTools?.map(skill => skill.value) || [],
      },
    ],
    template: templateId,
    published: true, 
  };

  console.log(portfolioData);

  const handleSubmit = () => {
    
  
    axios
      .post(`${env}/portfolios`, portfolioData, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((response) => {
        const publishedPortfolio = response.data.data || response.data;
        console.log(publishedPortfolio);
        // Verifica que el slug existe antes de redirigir
        if (publishedPortfolio?.slug) {
          setPortfolio(publishedPortfolio);
          navigate(`/portfolios/${publishedPortfolio.slug.trim()}`);
        } else {
          console.error("Slug is missing from response");
        }
      })
      .catch((error) => {
        alert("Failed to publish portfolio. ❌");
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-between mb-20">
        <button
          className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
          onClick={onClickPrev}
        >
          Previous step
        </button >
        {isAuthenticated ? (
          portfolio && portfolio.published ? (
            <a href={`/portfolio/${portfolio.slug}`}>Ver Publicado</a>
          ) : (
            <button 
            className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            onClick={handleSubmit}>
              Publish
              </button>
          )
        ) : (
          <button className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
            SignUp / LogIn
          </button>
        )}
      </div>

      {currentTheme}
    </div>
  );
};

export default TemplateSwitch;
