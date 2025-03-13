import React, { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import profileImage from "../assets/profileimage.png";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey. I've had the pleasure of working with some
            great companies and teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Work Experience
            </h3>
            <div className="space-y-8">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 pb-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600"></div>
                  <h4 className="text-xl font-medium text-gray-900">
                    {exp.role}
                  </h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration.from}</p>
                    <p className="text-sm text-gray-500">{exp.duration.to}</p>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">{data.name}</div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-gray-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-600 transition-colors"
            >
              Contact
            </a>
            <a
              href={data.resumeUrl}
              download
              target="_blank"
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-700 hover:cursor-pointer transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium bg-black text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const GreyTheme = ({ data }) => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar data={data} />

      {/* Home Section */}
      <section
        id="home"
        className="m-10 flex items-center pt-16 container mx-auto px-4"
      >
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div className="rounded-full overflow-hidden w-90 h-90 mx-auto md:ml-0 md:mr-auto">
            <img src={data.imageUrl || profileImage} alt="" srcset="" />
          </div>
          <div>
            <div className="text-5xl font-bold mb-6 leading-tight">
              Crafting Digital Solutions <br />
              with Innovative Technology
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl break-words">
              {data.about}
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border rounded-sm p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-black font-medium hover:text-gray-600 transition"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.skills[0].skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-sm p-6 text-center"
              >
                <h3 className="text-2xl font-semibold mb-6">{skillGroup}</h3>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {data.skills[1].skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-sm p-6 text-center"
              >
                <h3 className="text-2xl font-semibold mb-6">{skillGroup}</h3>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {data.skills[2].skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-sm p-6 text-center"
              >
                <h3 className="text-2xl font-semibold mb-6">{skillGroup}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Experience data={data} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <h2 className=" text-3xl md:text-4xl font-bold text-center mb-16">
          Contact Information
        </h2>
        <div className=" bg-gray-50 rounded-l shadow-md p-8 mb-8 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40">
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="text-black mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-600 hover:text-gray-950"
                >
                  {data.email}{" "}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Linkedin className="text-black mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">LinkedIn</p>
                <a
                  href={data.linkedIn}
                  className="text-gray-600 hover:text-gray-950"
                >
                  {data.linkedIn}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Github className="text-black mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">GitHub</p>
                <a
                  href={data.gitHub}
                  className="text-gray-600 hover:text-gray-950"
                >
                  {data.gitHub}{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GreyTheme;
