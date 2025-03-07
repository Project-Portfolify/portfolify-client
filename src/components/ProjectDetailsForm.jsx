import { Asterisk } from "lucide-react";

const ProjectDetailsForm = ({ form, onClickSubmit, onClickPrev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleOnSubmit = (data) => {
    console.log(data);
    onClickSubmit();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Title
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Description
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
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
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("link", { required: true })}
            />
            {errors.link && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          <button className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
            + Add Project
          </button>
        </div>

        <div className="flex justify-between w-full mt-6">
          <button
            className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            onClick={onClickPrev}
          >
            Previous step
          </button>
          <button
            className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
            type="submit"
          >
            Preview
          </button>
        </div>
      </div>
    </form>
  );
};
export default ProjectDetailsForm;
