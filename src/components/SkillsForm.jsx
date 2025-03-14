import Select from "react-select";
import { Controller } from "react-hook-form";
import { frontEndOptions, backendOptions, toolOptions } from "../constants";

const SkillsForm = ({ onClickNext, onClickPrev, form }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = form;

  const handleOnSubmit = (data) => {
    onClickNext();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col">
        {/* Front-End Skills */}
        <div className="flex flex-col md:flex-row gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Front-end
            </label>
            <Controller
              name="frontEnd"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={frontEndOptions}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Select your front-end skills"
                  value={field.value || []}
                  onChange={(selected) => field.onChange(selected)}
                />
              )}
            />
            {errors.frontEnd && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* Back-End Skills */}
        <div className="flex flex-col md:flex-row gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Back-end
            </label>
            <Controller
              name="backEnd"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={backendOptions}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Select your back-end skills"
                  value={field.value || []}
                  onChange={(selected) => field.onChange(selected)}
                />
              )}
            />
            {errors.backEnd && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* Other Tools */}
        <div className="flex flex-col md:flex-row gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Other Tools
            </label>
            <Controller
              name="otherTools"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={toolOptions}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Select your tools"
                  value={field.value || []}
                  onChange={(selected) => field.onChange(selected)}
                />
              )}
            />
            {errors.otherTools && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full mt-6">
          <button
            className="w-35 h-10 shadow-sm rounded-full bg-blue-950 hover:bg-blue-800 hover:cursor-pointer transition-all duration-700 text-white text-base font-semibold leading-7 mb-4 md:mb-0"
            onClick={onClickPrev}
          >
            Previous step
          </button>
          <button
            className="w-35 h-10 shadow-sm rounded-full bg-blue-950 hover:bg-blue-800 hover:cursor-pointer transition-all duration-700 text-white text-base font-semibold leading-7"
            type="submit"
          >
            Next step
          </button>
        </div>
      </div>
    </form>
  );
};

export default SkillsForm;
