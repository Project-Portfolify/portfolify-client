import React from "react";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

const PortfolioTips = () => {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "slider",
      focusAt: 0,
      animationDuration: 800,
      autoplay: 3000,
      rewind: true,
      perView: 2,
      gap: 20,
      animationTimingFunc: "ease-in-out",
    }).mount();

    const carousel = document.querySelector(".glide-08");

    // Pause autoplay when hovering over the carousel
    carousel.addEventListener("mouseenter", () => slider.pause());
    carousel.addEventListener("mouseleave", () => slider.play());

    return () => {
      // Cleanup event listeners when component unmounts
      carousel.removeEventListener("mouseenter", () => slider.pause());
      carousel.removeEventListener("mouseleave", () => slider.play());
      slider.destroy();
    };
  }, []);
  return (
    <div className="relative w-full h-auto bg-gradient-to-r ">
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-08 relative w-full overflow-hidden">
        <h2 className="text-4xl font-extrabold text-gray-400 mb-6 text-center">
          Tips for Creating a Great Portfolio
        </h2>
        {/*    <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="mt-10 whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
            {/*                    <!-- Start Tip --> */}
            <li>
              <div className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="300"
                  height="225"
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
              <div className="min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="400"
                  height="225"
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
              <div className="min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="400"
                  height="225"
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
              <div className="min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="400"
                  height="225"
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
              <div className="min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
                <iframe
                  width="400"
                  height="225"
                  src="https://www.youtube.com/embed/gHrS5X4nKbU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </div>
  );
};

export default PortfolioTips;
