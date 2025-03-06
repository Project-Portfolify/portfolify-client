import React from "react";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

const PortfolioList = () => {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 4000,

      autoplay: true,
      rewind: true,
      perView: 2,
      gap: 48,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1020: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-08 relative w-full overflow-hidden">
        {/*    <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
            <li>
              <div className="h-full w-full">
                {/*                    <!-- Start Testimonial --> */}
                <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
                  <div className="relative p-6">
                    <figure className="relative z-10">
                      <blockquote className="p-6 text-lg leading-relaxed">
                        <p>
                          Wind-ui, is probably one of the best libraries I've
                          came across. Good looking, easy to use and above all
                          super accessible.
                        </p>
                      </blockquote>
                    </figure>
                  </div>
                </div>
                {/*                    <!-- End Testimonial --> */}
              </div>
            </li>
            <li>
              <div className="h-full w-full">
                {/*                    <!-- Start Testimonial --> */}
                <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
                  <div className="relative p-6">
                    <figure className="relative z-10">
                      <blockquote className="p-6 text-lg leading-relaxed">
                        <p>
                          Wind-ui components come with proper attributes to
                          ensure full accessibility with the WAI-ARIA standards.
                        </p>
                      </blockquote>
                    </figure>
                  </div>
                </div>
                {/*                    <!-- End Testimonial --> */}
              </div>
            </li>
            <li>
              <div className="h-full w-full">
                {/*                    <!-- Start Testimonial --> */}
                <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
                  <div className="relative p-6">
                    <figure className="relative z-10">
                      <blockquote className="p-6 text-lg leading-relaxed">
                        <p>
                          You can easily communicate with Wind-ui's team for
                          support through their discord channel. They are
                          responsive and ultra helpful guys!
                        </p>
                      </blockquote>
                    </figure>
                  </div>
                </div>
                {/*                    <!-- End Testimonial --> */}
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

export default PortfolioList;
