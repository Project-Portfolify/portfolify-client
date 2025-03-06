import { useState } from "react";
import { useParams } from "react-router-dom";
import StepperComponent from "../components/StepperComponent";
import PersonalInfoForm from "../components/PersonalInfoForm";
import AboutForm from "../components/AboutForm";
import { useForm } from "react-hook-form";
import SkillsForm from "../components/SkillsForm";
import ProjectDetailsForm from "../components/ProjectDetailsForm";

const CreatePortfolio = () => {
  const personalInfoForm = useForm({
    defaultValues: {
      name: "Bob",
      title: "Dev",
      gitHub: "github",
      linkedIn: "linkedin",
      email: "bob@gmail.com",
    },
  });
  const aboutForm = useForm({});
  const skillsForm = useForm({});
  const projectForm = useForm({});

  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  const { templateId } = useParams();
  console.log(templateId);

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
        <AboutForm onClickNext={nextStep} onClickPrev={prevStep} />
      )}

      {/* Step 3 */}

      {step === 3 && (
        <SkillsForm
          onClickNext={nextStep}
          onClickPrev={prevStep}
          form={skillsForm}
        />
      )}

      {/* Step 5 */}

      {step === 4 && <ProjectDetailsForm form={projectForm} />}
    </div>
  );
};

export default CreatePortfolio;
