import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const GreyTheme = ({ data }) => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className=" top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">{data.name}</div>
          <nav className="space-x-6">
            {["Home", "Projects", "Skills", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={`
                  text-gray-600 hover:text-black transition-colors
                  ${
                    activeTab === section.toLowerCase()
                      ? "font-bold text-black"
                      : ""
                  }
                `}
                onClick={() => setActiveTab(section.toLowerCase())}
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-16 container mx-auto px-4"
      >
        <div className="max-w-4xl">
          <div className="text-5xl font-bold mb-6 leading-tight">
            Crafting Digital Solutions <br />
            with Innovative Technology
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">{data.about}</p>
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
                <h3 className="text-2xl font-semibold mb-6">
                  {skillGroup.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact Information
        </h2>
        <div className=" bg-gray-50 rounded-l shadow-md p-8 mb-8 ml-30 mr-30">
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="text-black mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-600 hover:text-gray-950"
                >
                  hello@example.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Linkedin className="text-black mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">LinkedIn</p>
                <a href="#" className="text-gray-600 hover:text-gray-950">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Github className="text-black mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-900">GitHub</p>
                <a href="#" className="text-gray-600 hover:text-gray-950">
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {["GitHub", "LinkedIn", "Email"].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-gray-300 transition"
              >
                {platform}
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2024 Alex Rodriguez. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GreyTheme;
