import { useNavigate, useParams } from "react-router-dom";
import {
  backendOptions,
  frontEndOptions,
  Templates,
  toolOptions,
} from "../constants";
import AtomTheme from "../templates/AtomTheme";
import BoldTheme from "../templates/BoldTheme";
import LightTheme from "../templates/LightTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";

const dummyData = {
  about:
    "Passionate developer with expertise in building scalable web applications and user-friendly experiences.",
  country: { value: "US", label: "United States" },
  email: "alex.johnson@example.com",
  gitHub: "https://github.com/alexjohnson",
  linkedIn: "https://linkedin.com/in/alexjohnson",
  name: "Alex Johnson",
  experience: [
    {
      title: "Full Stack Developer",
      company: "TechNova Solutions",
      role: "Senior Full Stack Developer",
      duration: {
        from: "2018",
        to: "2024",
      },
      description:
        "Developing scalable web applications and leading a team of developers to build innovative solutions.",
    },
    {
      title: "Frontend Developer",
      company: "TechNova Solutions",
      role: "Frontend Developer",
      duration: {
        from: "2016",
        to: "2018",
      },
      description:
        "Developing user-friendly interfaces and collaborating with designers to build responsive web applications.",
    },
  ],

  skills: [
    {
      skillType: "FrontEnd",
      skills: frontEndOptions.map((skill) => {
        return skill.value;
      }),
    },
    {
      skillType: "BackEnd",
      skills: backendOptions.map((skill) => {
        return skill.value;
      }),
    },
    {
      skillType: "OtherTools",
      skills: toolOptions.map((skill) => {
        return skill.value;
      }),
    },
  ],
  projects: [
    {
      title: "Project 1",
      description: "Developed an e-commerce platform using React and Node.js",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "Built a social media platform using Django and React",
      link: "https://example.com/project2",
    },
  ],
};

const PreviewPage = () => {
  const navigate = useNavigate();
  const { templateId } = useParams();
  const selectTemplate = () => {
    switch (templateId) {
      case Templates.AtomTheme:
        return <AtomTheme data={dummyData} />;
      case Templates.LightTheme:
        return <LightTheme data={dummyData} />;
      case Templates.BoldTheme:
        return <BoldTheme data={dummyData} />;
      case Templates.GreyTheme:
        return <GreyTheme data={dummyData} />;
      case Templates.DarkTheme:
        return <DarkTheme data={dummyData} />;
      default:
        return <h1>Preview not found</h1>;
    }
  };
  const template = selectTemplate();
  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="block md:hidden lg:hidden text-black px-4 mt-3 hover:cursor-pointer rounded"
      >
        Back to home
      </button>
      <div className="m-4 md:m-10 lg:m-10 border-1">{template}</div>
    </div>
  );
};
export default PreviewPage;
