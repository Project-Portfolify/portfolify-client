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
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
            Welcome to Portfolify
          </h1>
          <p className=" text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-sm animate-fadeInDelay">
            Showcase your projects and skills with ease.
          </p>
        </section>
      </div>

      {/* Content sections below the hero */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-10">
          Our Portfolios
        </h2>
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
