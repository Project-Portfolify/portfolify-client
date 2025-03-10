import React, { useRef } from "react";
import DarkTheme from "../assets/DarkTheme.png";
import GreyTheme from "../assets/GreyTheme.png";
import LightTheme from "../assets/LightTheme.png";
import AtomTheme from "../assets/AtomTheme.png";
import BoldTheme from "../assets/BoldTheme.png";
import { Templates } from "../constants";
import { useNavigate } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const templateList = [
  {
    templateId: Templates.AtomTheme,
    image: AtomTheme,
  },
  {
    templateId: Templates.LightTheme,
    image: LightTheme,
  },
  {
    templateId: Templates.BoldTheme,
    image: BoldTheme,
  },
  {
    templateId: Templates.GreyTheme,
    image: GreyTheme,
  },
  {
    templateId: Templates.DarkTheme,
    image: DarkTheme,
  },
];

const PortfolioList = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePreview = (templateId) => {
    navigate(`/preview/${templateId}`);
  };
  const handleCreate = (templateId) => {
    navigate(`/templates/${templateId}`);
  };

  return (
    <section
      id="portfolios"
      className="w-full h-auto px-4 py-2 overflow-hidden bg-gradient-to-r"
    >
      <div className="relative">
        {/* Scroll to the Left Button */}
        <button
          className="absolute hover:cursor-pointer hover:scale-110 hover:text-gray-600 left-10 top-1/2 w-10 z-10  text-black p-2 rounded-full"
          onClick={scrollLeft}
        >
          <ChevronsLeft size={40} />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex flex-nowrap gap-10 overflow-hidden pb-4 m-30"
        >
          {/* Card Template 1 */}
          {templateList.map((obj, i) => {
            return (
              <div
                key={i}
                className="flex-shrink-0 m-4 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg h-auto"
              >
                {/* Image on Top */}
                <img
                  className="w-100 h-90 object-cover"
                  src={obj.image}
                  alt="darkTheme"
                />

                {/* Content & Buttons at Bottom */}
                <div className="relative text-black px-4 pb-4 mt-2 flex flex-col items-center">
                  <div className="flex justify-between w-full">
                    <button
                      onClick={() => handlePreview(obj.templateId)}
                      className="w-20 h-8 shadow-sm rounded-lg bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-white text-sm"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => handleCreate(obj.templateId)}
                      className="w-20 h-8 shadow-sm rounded-lg bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-white text-sm"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll to the Right Button */}
        <button
          className="absolute hover:cursor-pointer hover:scale-110  hover:text-gray-600 right-10 top-1/2 w-10 z-10  text-black p-2 rounded-full"
          onClick={scrollRight}
        >
          <ChevronsRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default PortfolioList;
