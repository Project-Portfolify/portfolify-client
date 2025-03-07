import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import StepperComponent from "./StepperComponent";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";
import SkillsForm from "./SkillsForm";
import ProjectDetailsForm from "./ProjectDetailsForm";
import TemplateSwitch from "./TemplateSwitch";

const PortfolioStepper = () => {
  const [combinedData, setCombinedData] = useState();
  const { templateId } = useParams();
  console.log(templateId);

  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const personalInfoForm = useForm({
    defaultValues: {
      aboutMe:
        "Passionate developer with expertise in building scalable web applications and user-friendly experiences.",
      country: { value: "US", label: "United States" },
      email: "alex.johnson@example.com",
      gitHub: "https://github.com/alexjohnson",
      linkedIn: "https://linkedin.com/in/alexjohnson",
      name: "Alex Johnson",
      title: "Full Stack Developer",
    },
  });
  const professionalSummaryForm = useForm({
    defaultValues: {
      company: "TechNova Solutions",
      role: "Senior Full Stack Developer",
      roleDescription:
        "Developing scalable web applications and leading a team of developers to build innovative solutions.",
      yearFrom: "2018",
      yearTo: "2024",
    },
  });
  const skillsForm = useForm({
    skills: {
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
    },
  });
  const projectForm = useForm({
    defaultValues: {
      description:
        "A productivity tool that helps users track and manage daily tasks efficiently.",
      link: "https://taskify.example.com",
      title: "Taskify - Task Management App",
    },
  });

  const handleSubmit = () => {
    const personalInfo = personalInfoForm.getValues();
    const professionalSummary = professionalSummaryForm.getValues();
    const skills = skillsForm.getValues();
    const projects = projectForm.getValues();

    setCombinedData({ personalInfo, professionalSummary, skills, projects });
    console.log({ personalInfo, professionalSummary, skills, projects });

    nextStep();
  };
  return (
    <div className="m-30">
      <StepperComponent step={step} />
      {/* Full Form */}

      {/* Step-1 */}
      {step === 1 && (
        <PersonalInfoForm onClickNext={nextStep} form={personalInfoForm} />
      )}

      {/* Step 2 */}

      {step === 2 && (
        <ProfessionalSummaryForm
          onClickNext={nextStep}
          onClickPrev={prevStep}
          form={professionalSummaryForm}
        />
      )}

      {/* Step 3 */}

      {step === 3 && (
        <SkillsForm
          onClickNext={nextStep}
          onClickPrev={prevStep}
          form={skillsForm}
        />
      )}

      {/* Step 4 */}

      {step === 4 && (
        <ProjectDetailsForm
          form={projectForm}
          onClickSubmit={handleSubmit}
          onClickPrev={prevStep}
        />
      )}

      {/* Step 5 */}

      {step === 5 && (
        <TemplateSwitch
          templateId={templateId}
          data={combinedData}
          onClickPrev={prevStep}
        />
      )}
    </div>
  );
};

export default PortfolioStepper;
