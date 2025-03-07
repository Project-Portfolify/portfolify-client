import AtomTheme from "../templates/AtomTheme";
import LightTheme from "../templates/LightTheme";
import BoldTheme from "../templates/BoldTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import { Templates } from "../constants";

const TemplateSwitch = ({ templateId, data, onClickPrev }) => {

  const themes = {
    [Templates.AtomTheme]: <AtomTheme data={data} />,
    [Templates.LightTheme]: <LightTheme data={data} />,
    [Templates.BoldTheme]: <BoldTheme data={data} />,
    [Templates.GreyTheme]: <GreyTheme data={data} />,
    [Templates.DarkTheme]: <DarkTheme data={data} />,
  };


  const currentTheme = themes[templateId] || <h1>Template not found</h1>;

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


      {currentTheme}
    </div>
  );
};

export default TemplateSwitch;
