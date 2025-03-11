import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import StepperComponent from "./StepperComponent";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";
import SkillsForm from "./SkillsForm";
import ProjectDetailsForm from "./ProjectDetailsForm";
import TemplateSwitch from "./TemplateSwitch";
import ImageUpload from "./ImageUpload";

const PortfolioStepper = ({ formData, isEdit }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const [combinedData, setCombinedData] = useState();
  const { templateId } = useParams();
  console.log(templateId);

  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const personalInfoForm = useForm({
    defaultValues: {
      aboutMe: formData?.about,
      country: formData?.country,
      email: formData?.email,
      gitHub: formData?.gitHub,
      linkedIn: formData?.linkedIn,
      name: formData?.name,
      jobTitle: formData?.title,
    },
  });
  const professionalSummaryForm = useForm({
    defaultValues: {
      company: formData?.experience?.[0]?.company,
      role: formData?.experience?.[0]?.role,
      roleDescription: formData?.experience?.[0]?.description,
      yearFrom: formData?.experience?.[0]?.duration?.from,
      yearTo: formData?.experience?.[0]?.duration?.to,
    },
  });
  const skillsForm = useForm({
    defaultValues: {
      frontEnd:
        formData?.skills
          ?.find((s) => s.skillType === "FrontEnd")
          ?.skills?.map((skill) => ({ value: skill, label: skill })) || [],
      backEnd:
        formData?.skills
          ?.find((s) => s.skillType === "BackEnd")
          ?.skills?.map((skill) => ({ value: skill, label: skill })) || [],
      otherTools:
        formData?.skills
          ?.find((s) => s.skillType === "OtherTools")
          ?.skills?.map((skill) => ({ value: skill, label: skill })) || [],
    },
  });
  const projectForm = useForm({
    defaultValues: {
      projects: formData?.projects || [
        {
          title: "",
          description: "",
          link: "",
        },
      ],
    },
  });

  const handleSubmit = () => {
    const personalInfo = personalInfoForm.getValues();
    const professionalSummary = professionalSummaryForm.getValues();
    const skills = skillsForm.getValues();
    const projectsFormValues = projectForm.getValues();

    const combinedData = {
      name: personalInfo.name,
      gitHub: personalInfo.gitHub,
      linkedIn: personalInfo.linkedIn,
      email: personalInfo.email,
      country: personalInfo.country.value,
      title: personalInfo.jobTitle,
      about: personalInfo.aboutMe,
      experience: [
        {
          role: professionalSummary.role,
          company: professionalSummary.company,
          duration: {
            from: professionalSummary.yearFrom,
            to: professionalSummary.yearTo,
          },
          description: professionalSummary.roleDescription,
        },
      ],
      projects: projectsFormValues.projects.map((project, index) => ({
        title: project?.title || `Project ${index + 1}`,
        description: project?.description || "No description provided",
        link: project?.link || "",
      })),
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
      template: templateId,
      imageUrl: imageUrl,
      published: true,
    };

    setCombinedData(combinedData);
    console.log(combinedData);

    nextStep();
  };
  return (
    <div className="m-10 md:m-20 lg:m-30">
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
          onClickNext={nextStep}
          onClickPrev={prevStep}
        />
      )}

      {step === 5 && (
        <ImageUpload
          onClickPrev={prevStep}
          onClickSubmit={handleSubmit}
          imageUrl={imageUrl}
          onFileUpload={setImageUrl}
        />
      )}

      {/* Step 5 */}

      {step === 6 && (
        <TemplateSwitch
          templateId={templateId}
          data={combinedData}
          onClickPrev={prevStep}
          isEdit={isEdit}
        />
      )}
    </div>
  );
};

export default PortfolioStepper;
