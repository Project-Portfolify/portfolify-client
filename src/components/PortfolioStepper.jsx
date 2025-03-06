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
      aboutMe: "sdfghjkl",
      country: { value: "AF", label: "Afghanistan" },
      email: "as@example.com",
      gitHub: "wetryjk",
      linkedIn: "qwdy",
      name: "fsdfgh",
      title: "etryu",
    },
  });
  const professionalSummaryForm = useForm({
    defaultValues: {
      company: "qwertyj,",
      role: "adsfghj",
      roleDescription: "werthj,",
      yearFrom: "2023",
      yearTo: "2024",
    },
  });
  const skillsForm = useForm({});
  const projectForm = useForm({
    defaultValues: {
      description: "asdfghj",
      link: "sdfghj",
      title: "asdfghj",
    },
  });

  const handleSubmit = () => {
    const personalInfo = personalInfoForm.getValues();
    const professionalSummary = professionalSummaryForm.getValues();
    const skills = skillsForm.getValues();
    const projects = projectForm.getValues();

    setCombinedData({ personalInfo, professionalSummary, skills, projects });

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
        <ProjectDetailsForm form={projectForm} onClickSubmit={handleSubmit} />
      )}

      {/* Step 5 */}

      {step === 5 && (
        <TemplateSwitch template={templateId} data={combinedData} />
      )}
    </div>
  );
};

export default PortfolioStepper;
