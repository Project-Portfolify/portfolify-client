import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PortfolioTips = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-auto bg-gradient-to-r p-10">
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="relative w-full overflow-hidden">
        <h2 className="text-4xl font-medium text-gray-400 mb-6 text-center">
          Tips for Creating a Great Portfolio
        </h2>
        {/*    <!-- Slides --> */}
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          <div
            ref={scrollRef}
            className="mt-10 whitespace-nowrap flex space-x-4 overflow-x-auto p-0 pb-12 list-none  md:m-20 "
          >
            {/*                    <!-- Start Tip --> */}
            <li>
              <div className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="300"
                  height="225"
                  className="sm:w-full sm:h-auto"
                  src="https://www.youtube.com/embed/MsuXGvgWogQ?si=_T5bNX64d86D1KOc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </li>

            {/*                    <!-- Start Tip --> */}
            <li>
              <div className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="300"
                  height="225"
                  className="sm:w-full sm:h-auto"
                  src="https://www.youtube.com/embed/u49dK48Yi44"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
            {/*                    <!-- Start Tip --> */}
            <li>
              <div className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="300"
                  height="225"
                  className="sm:w-full sm:h-auto"
                  src="https://www.youtube.com/embed/Gg_ZHHcGUDQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
            {/*                    <!-- Start Tip --> */}
            <li>
              <div className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="300"
                  height="225"
                  className="sm:w-full sm:h-auto"
                  src="https://www.youtube.com/embed/dWoTu31E5lM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
            {/*                    <!-- Start Tip --> */}
            <li>
              <div className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="300"
                  height="225"
                  className="sm:w-full sm:h-auto"
                  src="https://www.youtube.com/embed/gHrS5X4nKbU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </div>
  );
};

export default PortfolioTips;
