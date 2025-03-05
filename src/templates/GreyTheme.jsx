import React, { useState } from "react";

const GreyTheme = () => {
  const [activeTab, setActiveTab] = useState("home");

  const projects = [
    {
      title: "Digital Marketplace",
      description:
        "Full-stack e-commerce platform with real-time inventory management",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
      link: "#",
    },
    {
      title: "AI Sentiment Analyzer",
      description: "Machine learning tool for analyzing social media sentiment",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      link: "#",
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT application for home automation and energy monitoring",
      technologies: ["React Native", "Firebase", "Arduino"],
      link: "#",
    },
  ];

  const skills = [
    { name: "Frontend", techs: ["React", "Vue.js", "Tailwind CSS"] },
    { name: "Backend", techs: ["Node.js", "Python", "GraphQL"] },
    { name: "Tools", techs: ["Git", "Docker", "CI/CD"] },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            Alex Rodriguez
          </div>
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
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Full-stack developer passionate about building scalable web
            applications that solve real-world problems through clean, efficient
            code.
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  {skillGroup.name}
                </h3>
                <div className="space-y-2">
                  {skillGroup.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="text-gray-700 text-lg">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
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
