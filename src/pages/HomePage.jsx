import React from "react";
import PortfolioList from "../components/PortfolioList";
import Footer from "../components/Footer";
import heroVideo from "../assets/hero.mp4";
import PortfolioTips from "../components/PortfolioTips";

const HomePage = () => {
  return (
    <>
      {/* Hero Section with a modern gradient background and full-width video */}
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
        <section
          id="home"
          className="relative z-10 flex flex-col items-center justify-center h-full text-center"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Welcome to My Website
          </h2>
          <p className="text-lg text-gray-200">
            This is a sample website built with React and Tailwind CSS.
          </p>
          <div className="mt-6">
            <a
              href="#about"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
            >
              Learn More
            </a>
          </div>
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
