import AtomTheme from "../templates/AtomTheme";
import LightTheme from "../templates/LightTheme";
import BoldTheme from "../templates/BoldTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import { Templates } from "../constants";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const env = import.meta.env.VITE_BASE_API_URL;

const TemplateSwitch = ({ templateId, data, onClickPrev }) => {
  const themes = {
    [Templates.AtomTheme]: <AtomTheme data={data} />,
    [Templates.LightTheme]: <LightTheme data={data} />,
    [Templates.BoldTheme]: <BoldTheme data={data} />,
    [Templates.GreyTheme]: <GreyTheme data={data} />,
    [Templates.DarkTheme]: <DarkTheme data={data} />,
  };
  const { getToken } = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");

  const currentTheme = themes[templateId] || <h1>Template not found</h1>;

  const { aboutMe, country, email, gitHub, linkedIn, name, jobTitle } =
    data.personalInfo;

  const { company, role, roleDescription, yearFrom, yearTo } =
    data.professionalSummary;

  const { description, link, title } = data.projects;

  const { backEnd, frontEnd, otherTools } = data.skills;

  const portfolioData = {
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
  };

  console.log(portfolioData);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${env}/portfolios`, portfolioData, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
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
        </button>
        <button
          onClick={handleSubmit}
          className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
        >
          Publish
        </button>
      </div>

      {currentTheme}
    </div>
  );
};

export default TemplateSwitch;
