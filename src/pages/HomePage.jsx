import React from "react";
import PortfolioList from "../components/PortfolioList";
import Footer from "../components/Footer";
import heroVideo from "../assets/hero.mp4";
import PortfolioTips from "../components/PortfolioTips";

const HomePage = () => {
  return (
    <>
      {/* Hero Section with video background and overlay */}
      <div className="relative w-full h-screen bg-gradient-to-r">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to improve text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        <section
          id="home"
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
            
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-sm animate-fadeInDelay">
            
          </p>
        </section>
      </div>

      {/* Content sections below the hero */}
      <div>
        <PortfolioList />
      </div>
      <div>
        <PortfolioTips />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
