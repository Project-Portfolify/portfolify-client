import React, { useRef } from 'react';
import DarkTheme from "../assets/DarkTheme.png";

const PortfolioList = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolios" className="w-full h-auto px-4 py-2 overflow-hidden bg-gradient-to-r "
>
      <div className="relative">
        {/* Scroll to the Left Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400 text-black p-2 rounded-lg"
          onClick={scrollLeft}
        >
          &lt;
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex flex-nowrap gap-10 overflow-x-auto scroll-smooth pb-4"
        >
          {/* Card Template 1 */}
          <div className="min-w-[300px] flex-shrink-0">
            <div
              className="w-[300px] h-[400px] overflow-hidden bg-white text-slate-500 shadow-2xl shadow-slate-200 mt-4 border-2 border-gray-500 rounded-xl relative"
              style={{
                backgroundImage: `url(${DarkTheme})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-6">
                <figure className="relative z-10">
                  <blockquote className="p-6 text-lg leading-relaxed">
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>

          {/* Card Template 2 */}
          <div className="min-w-[300px] flex-shrink-0">
            <div
              className="w-[300px] h-[400px] overflow-hidden bg-white text-slate-500 shadow-2xl shadow-slate-200 mt-4 border-2 border-gray-500 rounded-xl relative"
              style={{
                backgroundImage: `url(${DarkTheme})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-6">
                <figure className="relative z-10">
                  <blockquote className="p-6 text-lg leading-relaxed">
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>

          {/* Card Template 3 */}
          <div className="min-w-[300px] flex-shrink-0">
            <div
              className="w-[300px] h-[400px] overflow-hidden bg-white text-slate-500 shadow-2xl shadow-slate-200 mt-4 border-2 border-gray-500 rounded-xl relative"
              style={{
                backgroundImage: `url(${DarkTheme})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-6">
                <figure className="relative z-10">
                  <blockquote className="p-6 text-lg leading-relaxed">
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>

          {/* Card Template 4 */}
          <div className="min-w-[300px] flex-shrink-0">
            <div
              className="w-[300px] h-[400px] overflow-hidden bg-white text-slate-500 shadow-2xl shadow-slate-200 mt-4 border-2 border-gray-500 rounded-xl relative"
              style={{
                backgroundImage: `url(${DarkTheme})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-6">
                <figure className="relative z-10">
                  <blockquote className="p-6 text-lg leading-relaxed">
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
          {/* Card Template 5 */}
          <div className="min-w-[300px] flex-shrink-0">
            <div
              className="w-[300px] h-[400px] overflow-hidden bg-white text-slate-500 shadow-2xl shadow-slate-200 mt-4 border-2 border-gray-500 rounded-xl relative"
              style={{
                backgroundImage: `url(${DarkTheme})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-6">
                <figure className="relative z-10">
                  <blockquote className="p-6 text-lg leading-relaxed">
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
          {/* Card Template 6 */}
          <div className="min-w-[300px] flex-shrink-0">
            <div
              className="w-[300px] h-[400px] overflow-hidden bg-white text-slate-500 shadow-2xl shadow-slate-200 mt-4 border-2 border-gray-500 rounded-xl relative"
              style={{
                backgroundImage: `url(${DarkTheme})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-6">
                <figure className="relative z-10">
                  <blockquote className="p-6 text-lg leading-relaxed">
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
          {/* Card Template 7 */}
          <div className="min-w-[300px] flex-shrink-0">
            <div
              className="w-[300px] h-[400px] overflow-hidden bg-white text-slate-500 shadow-2xl shadow-slate-200 mt-4 border-2 border-gray-500 rounded-xl relative"
              style={{
                backgroundImage: `url(${DarkTheme})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-6">
                <figure className="relative z-10">
                  <blockquote className="p-6 text-lg leading-relaxed">
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to the Right Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400 text-black p-2 rounded-lg"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PortfolioList;
