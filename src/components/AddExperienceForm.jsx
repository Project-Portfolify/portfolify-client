import { Asterisk, Trash2 } from "lucide-react";

function AddExperienceForm({ register, errors, index, remove }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-7 mt-6">Experience {index + 1}</h2>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Role
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950"
              {...register(`experience.${index}.role`, { required: true })}
            />
            {errors?.experience?.[index]?.role && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full relative mt-4 md:mt-0">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Company
              <Asterisk size={10} color="red" />
            </label>
            <input
              type="text"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950"
              {...register(`experience.${index}.company`, { required: true })}
            />
            {errors?.experience?.[index]?.company && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-6 mb-6">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Describe your role
              <Asterisk size={10} color="red" />
            </label>
            <textarea
              rows="4"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950"
              {...register(`experience.${index}.description`, {
                required: true,
              })}
            />
            {errors?.experience?.[index]?.roleDescription && (
              <span className="text-red-600 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full relative mt-4 md:mt-0">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Duration
              <Asterisk size={10} color="red" />
            </label>
            <div className="flex space-x-4">
              <input
                type="number"
                defaultValue={new Date().getFullYear()}
                min="1980"
                max="2100"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950"
                {...register(`experience.${index}.duration.from`, {
                  required: true,
                })}
              />
              {errors?.experience?.[index]?.duration?.yearFrom && (
                <span className="text-red-600 text-xs">
                  This field is required
                </span>
              )}
              <span className="flex items-center text-gray-600">-</span>
              <input
                type="number"
                min="1980"
                max="2100"
                defaultValue={new Date().getFullYear()}
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950"
                {...register(`experience.${index}.duration.to`, {
                  required: true,
                })}
              />
              {errors?.experience?.[index]?.duration?.yearTo && (
                <span className="text-red-600 text-xs">
                  This field is required
                </span>
              )}
              {index > 0 && (
                <div className="mt-3 text-red-600 hover:cursor-pointer hover:scale-110">
                  <Trash2
                    onClick={(e) => {
                      e.preventDefault();
                      remove(index);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExperienceForm;
