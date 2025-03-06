const SkillsForm = ({ onClickNext, onClickPrev, form }) => {
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
        <div className="flex flex-row gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("skills", { required: true })}
            />
            {errors.skills && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
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
    </form>
  );
};

export default SkillsForm;
