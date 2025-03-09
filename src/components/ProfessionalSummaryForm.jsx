import { Asterisk } from "lucide-react";

const ProfessionalSummaryForm = ({ onClickNext, onClickPrev, form }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleOnSubmit = (data) => {
    console.log(data);
    onClickNext();
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Role
                <Asterisk size={10} color="red" />
              </label>
              <input
                type="text"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("role", { required: true })}
              />
              {errors.role && (
                <span className="text-red-600 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Company
                <Asterisk size={10} color="red" />
              </label>
              <input
                type="text"
                name="company"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("company", { required: true })}
              />
              {errors.company && (
                <span className="text-red-600 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Describe your role
                <Asterisk size={10} color="red" />
              </label>
              <textarea
                type="text"
                rows="4"
                name="description"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("roleDescription", { required: true })}
              />
              {errors.roleDescription && (
                <span className="text-red-600 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Duration
                <Asterisk size={10} color="red" />
              </label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  min="1960"
                  max="2026"
                  className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("yearFrom", { required: true })}
                />
                {errors.duration && (
                  <span className="text-red-600 text-xs">
                    This field is required
                  </span>
                )}
                <span className="flex items-center text-gray-600">-</span>
                <Asterisk size={10} color="red" />
                <input
                  type="number"
                  min="1960"
                  max="2026"
                  className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("yearTo", { required: true })}
                />
                {errors.yearTo && (
                  <span className="text-red-600 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>
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
              Next step
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ProfessionalSummaryForm;
