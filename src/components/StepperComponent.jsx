import React from "react";
import clsx from "clsx";

const DynamicStepperComponent = ({ steps, currentStep }) => {
  return (
    <>
      {steps.map((step, index) => {
        const currentStepIndex = index + 1;

        return (
          <li
            key={index}
            className={clsx(
              "flex md:w-full items-center",
              currentStepIndex < steps.length
                ? " sm:after:content-[''] after:w-full after:h-1 after:border-b  after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 "
                : "",
              currentStep >= currentStepIndex
                ? "text-indigo-600 "
                : "text-gray-600 ",
              currentStep >= currentStepIndex + 1 // enable this only when user moves to next step
                ? "after:border-indigo-600 after:border-solid"
                : "after:border-gray-200"
            )}
          >
            <div className="flex items-center whitespace-nowrap after:content-['/']  sm:after:hidden after:mx-2">
              <span
                className={clsx(
                  "w-6 h-6   border rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10",
                  currentStep >= currentStepIndex
                    ? "bg-indigo-600 border-indigo-200 text-white"
                    : "bg-gray-100 border-gray-200"
                )}
              >
                {currentStepIndex}
              </span>
              {step.title}
            </div>
          </li>
        );
      })}
    </>
  );
};

const StepperComponent = ({ step }) => {
  return (
    <div>
      <ol className="flex items-center w-full text-sm text-gray-500 font-medium sm:text-base mb-12">
        <DynamicStepperComponent
          steps={[
            {
              title: "Personal Info",
            },
            {
              title: "About me",
            },
            {
              title: "Professional Experience",
            },
            {
              title: "Skills",
            },
            {
              title: "Projects",
            },
          ]}
          currentStep={step}
        />
      </ol>
    </div>
  );
};
export default StepperComponent;
