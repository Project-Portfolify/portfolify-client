import { Controller, useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import Select from "react-select";
import { Asterisk } from "lucide-react";
import { useMemo } from "react";

const PersonalInfoForm = ({ onSubmit, form }) => {
  const options = useMemo(() => countryList().getData(), []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleOnSubmit = (data) => {
    console.log(data);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col">
        <div className="flex gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
              Name
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full h-9 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none "
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
              Professional Title
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full h-9 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none "
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
              GitHub
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full h-9 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none "
              {...register("gitHub", { required: true })}
            />
            {errors.gitHub && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
              LinkedIn
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full h-9 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none "
              {...register("linkedIn", { required: true })}
            />
            {errors.linkedIn && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
              Email
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="email"
              className="block w-full h-9 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none "
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Country
              <Asterisk size={10} color="red" />
            </label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  placeholder="Select your country"
                  className="w-full"
                />
              )}
            />

            {errors.country && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          {/* <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Portfolio Picture
            </label>
            <input
              type="file"
              name="imageUrl"
              accept="image/*"
              className="block w-full h-9 px-5 py-2.5 bg-white text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none cursor-pointer"

            />
          </div> */}
        </div>
        <div className="flex flex-col gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              About Me
              <Asterisk size={10} color="red" />
            </label>
            <textarea
              rows="4"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Tell us about yourself..."
              {...register("aboutMe", { required: true })}
            />
            {errors.aboutMe && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-end w-full mt-6">
          <button
            className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            type="submit"
          >
            Next step
          </button>
        </div>
      </div>
    </form>
  );
};
export default PersonalInfoForm;
