import { useFieldArray } from "react-hook-form";
import AddProjectForm from "./AddProjectForm";
import { SquarePlus } from "lucide-react";
import { useEffect } from "react";

const ProjectDetailsForm = ({ form, onClickSubmit, onClickPrev }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const handleOnSubmit = (data) => {
    console.log(data);
    onClickSubmit();
  };
  console.log(errors);

  useEffect(() => {
    if (fields.length === 0) {
      append();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="flex flex-col">
        {fields.map((_, index) => {
          return (
            <AddProjectForm
              key={index}
              index={index}
              register={register}
              remove={remove}
              error={errors.projects?.[index]}
            />
          );
        })}

        <div
          onClick={() => append({ title: "", description: "", link: "" })}
          className="flex text-gray-500 hover:cursor-pointer  hover:scale-110  w-35 p-2 h-10 rounded-md"
        >
          <div className="">
            <SquarePlus />
          </div>
          <div className="text-md ml-2">Add Project</div>
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
