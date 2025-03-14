import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import StepperComponent from "./StepperComponent";
import PersonalInfoForm from "./PersonalInfoForm";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";
import SkillsForm from "./SkillsForm";
import ProjectDetailsForm from "./ProjectDetailsForm";
import TemplateSwitch from "./TemplateSwitch";
import ImageUpload from "./ImageUpload";
import countryList from "react-select-country-list";

const PortfolioStepper = ({ formData, isEdit }) => {
  const [imageUrl, setImageUrl] = useState(formData?.imageUrl || null);
  const [resumeUrl, setResumeUrl] = useState(formData?.resumeUrl || null);
  const options = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    if (formData?.imageUrl) {
      setImageUrl(formData.imageUrl);
    }
  }, [formData]);

  const [combinedData, setCombinedData] = useState();
  const { templateId } = useParams();

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
      country: formData?.country
        ? options.find((x) => x.value === formData?.country)
        : null,
      email: formData?.email,
      gitHub: formData?.gitHub,
      linkedIn: formData?.linkedIn,
      name: formData?.name,
      jobTitle: formData?.title,
    },
  });
  const professionalSummaryForm = useForm({
    defaultValues: {
      experience: formData?.experience ?? [],
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
      country: personalInfo.country,
      title: personalInfo.jobTitle,
      about: personalInfo.aboutMe,
      experience: professionalSummary.experience,
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
      resumeUrl: resumeUrl,
      published: true,
    };

    setCombinedData(combinedData);

    nextStep();
  };
  return (
    <div className="m-5 md:m-10 lg:m-30">
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
          onImageUpload={setImageUrl}
          resumeUrl={resumeUrl}
          onResumeUpload={setResumeUrl}
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
