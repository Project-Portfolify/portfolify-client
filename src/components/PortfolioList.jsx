import React, { useRef } from "react";
import DarkTheme from "../assets/DarkTheme.png";
import GreyTheme from "../assets/GreyTheme.png";
import LightTheme from "../assets/LightTheme.png";
import AtomTheme from "../assets/AtomTheme.png";
import BoldTheme from "../assets/BoldTheme.png";
import { Templates } from "../constants";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="w-full h-auto px-4 overflow-hidden bg-gradient-to-r"
    >
      <div className="relative">
        {/* Scroll to the Left Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md z-10"
          onClick={scrollLeft}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex flex-nowrap gap-4 overflow-x-auto pb-4 m-4 lg:m-12"
        >
          {/* Card Template 1 */}
          {templateList.map((obj, i) => {
            return (
              <div
                key={i}
                className="flex-shrink-0 m-4 relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg w-64 shadow-lg h-auto transform transition-transform hover:scale-105"
              >
                {/* Image on Top */}
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={obj.image}
                  alt="template"
                />

                {/* Content & Buttons at Bottom */}
                <div className="relative text-black px-4 pb-4 mt-2 flex flex-col items-center">
                  <div className="flex justify-between w-full mt-2 gap-5">
                    <button
                      onClick={() => handlePreview(obj.templateId)}
                      className="w-20 h-8 shadow-sm rounded-lg bg-white hover:bg-gray-300 transition-all duration-300 text-black text-sm"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => handleCreate(obj.templateId)}
                      className="w-20 h-8 shadow-sm rounded-lg bg-white hover:bg-gray-300 transition-all duration-300 text-black text-sm"
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
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md z-10"
          onClick={scrollRight}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default PortfolioList;
