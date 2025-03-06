import React from "react";
import PortfolioList from "../components/PortfolioList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-100">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-10">
          {/* Hero Section */}
          <section id="home" className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Welcome to My Website
            </h2>
            <p className="text-lg text-gray-600">
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

          {/* Features Section */}
          <section
            id="services"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Feature 1</h3>
              <p className="text-gray-600">Short description of feature 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Feature 2</h3>
              <p className="text-gray-600">Short description of feature 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Feature 3</h3>
              <p className="text-gray-600">Short description of feature 3.</p>
            </div>
          </section>
        </main>
        <PortfolioList />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
