import React from "react";
import clsx from "clsx";

const StepperComponent = ({ step }) => {
  return (
    <div>
      <ol className="flex items-center w-full text-sm text-gray-500 font-medium sm:text-base mb-12">
        <li
          className={clsx(
            "flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b  after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ",
            step >= 1 ? "text-indigo-600 " : "text-gray-600 ",
            step >= 2
              ? "after:border-indigo-600 after:border-solid"
              : "after:border-gray-200"
          )}
        >
          <div className="flex items-center whitespace-nowrap after:content-['/']  sm:after:hidden after:mx-2 ">
            <span className="w-6 h-6 bg-indigo-600 border border-indigo-200 rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
              1
            </span>
            Personal Info
          </div>
        </li>
        <li
          className={clsx(
            "flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b  after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ",
            step >= 2 ? "text-indigo-600 " : "text-gray-600 ",
            step >= 3 ? "after:border-indigo-600" : "after:border-gray-200"
          )}
        >
          <div className="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2 ">
            <span
              className={clsx(
                "w-6 h-6   border rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10",
                step >= 2
                  ? "bg-indigo-600 border-indigo-200 text-white"
                  : "bg-gray-100 border-gray-200"
              )}
            >
              2
            </span>
            Professional Summary
          </div>
        </li>
        <li
          className={clsx(
            "flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b  after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ",
            step >= 3 ? "text-indigo-600 " : "text-gray-600 ",
            step >= 4 ? "after:border-indigo-600" : "after:border-gray-200"
          )}
        >
          <div className="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2 ">
            <span
              className={clsx(
                "w-6 h-6   border rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10",
                step >= 3
                  ? "bg-indigo-600 border-indigo-200 text-white"
                  : "bg-gray-100 border-gray-200"
              )}
            >
              3
            </span>
            Skills
          </div>
        </li>
        <li
          className={clsx(
            "flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b  after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8  ",
            step >= 4 ? "text-indigo-600 " : "text-gray-600 ",
            step >= 5 ? "after:border-indigo-600" : "after:border-gray-200"
          )}
        >
          <div className="flex items-center  ">
            <span
              className={clsx(
                "w-6 h-6   border rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10",
                step >= 4
                  ? "bg-indigo-600 border-indigo-200 text-white"
                  : "bg-gray-100 border-gray-200"
              )}
            >
              4
            </span>
            Projects
          </div>
        </li>
        <li
          className={clsx(
            "flex md:w-full items-center  ",
            step >= 5 ? "text-indigo-600 " : "text-gray-600 ",
            step >= 6 ? "after:border-indigo-600" : "after:border-gray-200"
          )}
        >
          <div className="flex items-center  ">
            <span
              className={clsx(
                "w-6 h-6   border rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10",
                step >= 5
                  ? "bg-indigo-600 border-indigo-200 text-white"
                  : "bg-gray-100 border-gray-200"
              )}
            >
              5
            </span>
            Preview
          </div>
        </li>
      </ol>
    </div>
  );
};
export default StepperComponent;
