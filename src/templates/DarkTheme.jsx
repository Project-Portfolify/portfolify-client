"use client";

import { useState, useEffect } from "react";
import {
  MoonIcon,
  SunIcon,
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
  CodeIcon,
} from "lucide-react";

export default function DarkTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply or remove dark class based on state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b dark:border-gray-700">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Alex Johnson</h1>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Resume
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-600">
            <img
              src="/placeholder.svg?height=128&width=128"
              alt="Alex Johnson"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Alex Johnson
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Frontend Developer
          </h2>
          <p className="max-w-2xl text-lg mb-8">
            I build accessible, user-friendly web applications with modern
            technologies. Passionate about creating beautiful user experiences
            that solve real problems.
          </p>
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
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow dark:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                      <CodeIcon className="h-4 w-4" /> Code
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      <ExternalLinkIcon className="h-4 w-4" /> Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experience & Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex mb-8 border rounded-md overflow-hidden">
              <button className="w-1/2 py-3 text-center bg-blue-600 text-white">
                Work Experience
              </button>
              <button className="w-1/2 py-3 text-center bg-gray-100 dark:bg-gray-800">
                Education
              </button>
            </div>

            {/* Experience Content */}
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.company}
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the components follow similar patterns */}
      </main>

      {/* Footer - Similar to original but with Tailwind classes */}
      <footer className="border-t py-8 mt-8 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Existing data arrays remain the same
const projects = [
  /* ... */
];
const experience = [
  /* ... */
];
const education = [
  /* ... */
];
