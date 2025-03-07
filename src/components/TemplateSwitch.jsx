import AtomTheme from "../templates/AtomTheme";

const TemplateSwitch = ({ templateId, data, onClickPrev }) => {
  return (
    <div>
      <div className="flex justify-between mb-20">
        <button
          className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
          onClick={onClickPrev}
        >
          Previous step
        </button>
        <button className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
          Publish
        </button>
      </div>
      <AtomTheme data={data} />
    </div>
  );
};
export default TemplateSwitch;
