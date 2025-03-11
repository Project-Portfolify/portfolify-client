import { useParams } from "react-router-dom";
import { Templates } from "../constants";
import AtomTheme from "../templates/AtomTheme";
import BoldTheme from "../templates/BoldTheme";
import LightTheme from "../templates/LightTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/GreyTheme";

const skills = {
  frontEnd: [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "nextjs", label: "Next.js" },
    { value: "nuxtjs", label: "Nuxt.js" },
    { value: "htmlcss", label: "HTML & CSS" },
  ],
  backEnd: [
    { value: "nodejs", label: "Node.js" },
    { value: "express", label: "Express.js" },
    { value: "django", label: "Django" },
    { value: "flask", label: "Flask" },
    { value: "spring", label: "Spring Boot" },
  ],
  otherTools: [
    { value: "git", label: "Git" },
    { value: "github", label: "GitHub" },
    { value: "docker", label: "Docker" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "jenkins", label: "Jenkins" },
    { value: "aws", label: "AWS" },
  ],
};

const dummyData = {
  aboutMe:
    "Passionate developer with expertise in building scalable web applications and user-friendly experiences.",
  country: { value: "US", label: "United States" },
  email: "alex.johnson@example.com",
  gitHub: "https://github.com/alexjohnson",
  linkedIn: "https://linkedin.com/in/alexjohnson",
  name: "Alex Johnson",
  title: "Full Stack Developer",
  company: "TechNova Solutions",
  role: "Senior Full Stack Developer",
  roleDescription:
    "Developing scalable web applications and leading a team of developers to build innovative solutions.",
  yearFrom: "2018",
  yearTo: "2024",
  skills: [
    {
      skillType: "FrontEnd",
      skills: skills.frontEnd.map((skill) => {
        return skill.value;
      }),
    },
    {
      skillType: "BackEnd",
      skills: skills.backEnd.map((skill) => {
        return skill.value;
      }),
    },
    {
      skillType: "OtherTools",
      skills: skills.otherTools.map((skill) => {
        return skill.value;
      }),
    },
  ],
};

const PreviewPage = () => {
  const { templateId } = useParams();

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
export default PreviewPage;
