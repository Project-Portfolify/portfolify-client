"use client";

import { useState, useEffect } from "react";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
  CodeIcon,
  Menu,
  X,
} from "lucide-react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../assets/profileimage.png";
import projectImage from "../assets/projectImage.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import { backendOptions, frontEndOptions, toolOptions } from "../constants";

const imageArray = [projectImage, project1, project2];

export default function DarkTheme({ data }) {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const pickRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      setRandomImage(imageArray[randomIndex]);
    };

    pickRandomImage();
  }, []);

  const Navbar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="w-full bg-gray-900 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">{data.name}</div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-indigo-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-indigo-600 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:text-indigo-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>
              <a
                href={data.resumeUrl}
                download
                target="_blank"
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 hover:cursor-pointer transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-indigo-600 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-100 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-600"
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b dark:border-gray-700">
        <Navbar data={data} />
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-600">
            <img
              src={data.imageUrl || profileImage}
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            {data.title}
          </h2>
          <p className="max-w-2xl text-lg mb-8">{data.about}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View My Work <ArrowDownIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            >
              Contact Me
            </button>
          </div>
          <div className="flex mt-8 space-x-4">
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="container mx-auto max-w-5xl">
            {data.skills.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h3 className="text-center text-xl font-semibold mb-6">
                  {category.skillType}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  {category.skills.map((skill, index) => {
                    const label = (
                      category.skillType === "FrontEnd"
                        ? frontEndOptions
                        : category.skillType === "BackEnd"
                        ? backendOptions
                        : toolOptions
                    ).find((ele) => ele.value === skill).label;
                    return (
                      <div
                        key={index}
                        className="border rounded-sm p-6 hover:shadow-md transition-shadow dark:border-gray-700"
                      >
                        <h3 className="text-xl font-semibold mb-4">{label}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {/* Experience Content */}
            <div className="space-y-6">
              {data.experience.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-sm p-6 hover:shadow-md transition-shadow dark:border-gray-700"
                >
                  <div className="flex flex-col justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.role}
                      </h3>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        {item.duration.from} - {item.duration.to}
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 mt-4">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow dark:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={randomImage || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-between">
                    <a
                      href={project.link}
                      className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      <ExternalLinkIcon className="h-4 w-4" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-16">
            Contact Information
          </h2>
          <div className=" bg-gray-900 rounded-l shadow-md p-8 mb-8 ml-auto mr-auto border border-gray-500">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-white mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href={`mailto:${data.email}`}
                    className="text-white hover:text-blue-600"
                  >
                    {data.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Linkedin className="text-white mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <a
                    href={data.linkedIn}
                    className="text-white hover:text-blue-600"
                  >
                    {data.linkedIn}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Github className="text-white mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <a
                    href={data.gitHub}
                    className="text-white hover:text-blue-600"
                  >
                    {data.gitHub}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-gray-400 mb-4">
                  Location: {data.country.label}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Rest of the components follow similar patterns */}
      </main>

      {/* Footer - Similar to original but with Tailwind classes */}
      <footer className="border-t py-8 mt-8 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
