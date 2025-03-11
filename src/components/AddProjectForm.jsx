import { Asterisk, Trash2 } from "lucide-react";
import React from "react";

const AddProjectForm = ({ register, index, remove, error }) => {
  return (
    <div>
      <div className="flex flex-row gap-x-6 mb-6">
        <div className="w-full relative">
          <h2 className="text-xl font-bold mb-7">Project {index + 1}</h2>

          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Title
            <Asterisk size={10} color="red" />
          </label>
          <input
            type="text"
            className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register(`projects.${index}.title`, {
              required: "Title is required",
            })}
          />
          {error?.title && (
            <span className="text-red-600 text-xs">This field is required</span>
          )}
        </div>
      </div>
      <div>
        <div className="w-full relative">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Description
            <Asterisk size={10} color="red" />
          </label>
          <input
            type="text"
            className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register(`projects.${index}.description`)}
          />
          {error?.description && (
            <span className="text-red-600 text-xs">This field is required</span>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-x-6 mb-6">
        <div className="w-100 relative">
          <label className="flex mt-8 items-center mb-2 text-gray-600 text-sm font-medium">
            Project Link
            <Asterisk size={10} color="red" />
          </label>
          <input
            type="text"
            className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register(`projects.${index}.link`)}
          />
        </div>
        {index > 0 && (
          <div className="mt-18 text-red-600 hover:cursor-pointer hover:scale-110">
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
  );
};

export default AddProjectForm;
