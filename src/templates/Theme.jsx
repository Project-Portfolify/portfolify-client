import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-indigo-400">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-lg text-gray-300 mt-3">
          Full-Stack Developer | Designer | Creator
        </p>
      </section>

      {/* About Section */}
      <section className="text-center py-10 max-w-3xl">
        <h2 className="text-4xl font-semibold text-indigo-300">About Me</h2>
        <p className="text-gray-300 mt-4 leading-relaxed">
          I am a passionate developer specializing in front-end and back-end
          technologies. I love creating sleek, user-friendly experiences that
          bring ideas to life.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-10 max-w-4xl">
        <h2 className="text-4xl font-semibold text-center text-indigo-300">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-indigo-200">
              Project One
            </h3>
            <p className="text-gray-400 mt-2">
              An innovative solution that enhances user engagement.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-indigo-200">
              Project Two
            </h3>
            <p className="text-gray-400 mt-2">
              A seamless integration of modern technologies for optimal
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-semibold text-indigo-300">Contact Me</h2>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 text-3xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 text-3xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 text-3xl transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
