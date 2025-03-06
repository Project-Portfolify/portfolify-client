import { useState } from "react";
import { useParams } from "react-router-dom";
import { Asterisk } from "lucide-react";
import StepperComponent from "../components/StepperComponent";
import PersonalInfoForm from "../components/PersonalInfoForm";
import AboutForm from "../components/AboutForm";
import { useForm } from "react-hook-form";
import SkillsForm from "../components/SkillsForm";

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

      <form>
        {/* Step 5 */}

        {step === 5 && (
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-6 mb-6">
              <div className="w-full relative">
                <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                  Title
                  <Asterisk size={10} color="red" />
                </label>
                <input
                  type="text"
                  name="title"
                  className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="w-full relative">
                <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                  Description
                  <Asterisk size={10} color="red" />
                </label>
                <input
                  type="text"
                  name="description"
                  className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-6 mb-6">
              <div className="w-100 relative">
                <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                  Project Link
                  <Asterisk size={10} color="red" />
                </label>
                <input
                  type="text"
                  name="title"
                  className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between w-full mt-6">
              <button
                className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
                onClick={prevStep}
              >
                Previous step
              </button>
              <button
                className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
                onClick={nextStep}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreatePortfolio;
