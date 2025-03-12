import { Asterisk, Square, SquarePlus } from "lucide-react";
import AddExperienceForm from "./AddExperienceForm";
import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";

const ProfessionalSummaryForm = ({ onClickNext, onClickPrev, form }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const handleOnSubmit = (data) => {
    onClickNext();
  };

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
            <AddExperienceForm
              key={index}
              index={index}
              register={register}
              remove={remove}
              error={errors.projects?.[index]}
            />
          );
        })}

        <div
          onClick={() =>
            append({
              role: "",
              company: "",
              roleDescription: "",
              duration: {
                from: "",
                to: "",
              },
            })
          }
          className="flex text-gray-500 hover:cursor-pointer  hover:scale-110  w-35 p-2 h-10 rounded-md"
        >
          <div className="">
            <SquarePlus />
          </div>
          <div className="text-md ml-2">Add More</div>
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
export default ProfessionalSummaryForm;
