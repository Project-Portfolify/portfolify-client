import React, { useEffect, useState } from "react";
import profileImage from "../assets/profileimage.png";
import projectImage from "../assets/projectImage.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Code,
  Palette,
  Globe,
  Zap,
  Terminal,
  Database,
  Layout,
  Cpu,
  Server,
  Braces,
  Layers,
  GitBranch,
} from "lucide-react";

const imageArray = [projectImage, project1, project2];

// Components
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
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
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
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
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

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
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
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="text-xl font-medium text-gray-900">
                    {exp.role}
                  </h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
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

// Project Card Component
const ProjectCard = ({ title, description, image, tags, link }) => {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const pickRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      setRandomImage(imageArray[randomIndex]);
    };

    pickRandomImage();
  }, []);
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={randomImage}
          alt={title}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white font-medium hover:underline"
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
      </div>
    </div>
  );
};

const SkillBadge = ({ icon: Icon, name }) => {
  return (
    <div className="bg-gray-200 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-300 transition-colors group">
      <div className="bg-purple-500/20 rounded-full p-1.5">
        <Icon className="h-4 w-4 text-purple-600 group-hover:text-purple-500" />
      </div>
      <span className="text-gray-800 group-hover:text-black font-medium">
        {name}
      </span>
    </div>
  );
};

function LightThemeTemplate({ data }) {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const pickRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      setRandomImage(imageArray[randomIndex]);
    };

    pickRandomImage();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar data={data} />

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm<span className="text-indigo-600"> {data.name}</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                {data.aboutMe}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  View My Work <ChevronRight size={18} className="ml-1" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <a
                  href={data.gitHub}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={data.linkedIn}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={data.email}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-sm blur opacity-25"></div>
                <div className="relative w-80 bg-white overflow-hidden rounded-full">
                  <img
                    src={data.imageUrl || profileImage}
                    alt="Portfolio Owner"
                    className="w-full max-w-xs "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          </div>

          <div className=" gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 mb-6">{data.about}</p>
              <p className="text-gray-600 mb-6">
                I specialize in responsive web design, user experience, and
                front-end development, with a focus on creating accessible and
                performant websites that deliver results.
              </p>

              <div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Frontend Development
                  </h4>
                  <ul className="space-y-2 text-gray-600 flex w-full flex-wrap gap-7">
                    {data.skills[0].skills.map((skill, i) => {
                      return <SkillBadge key={i} icon={Code} name={skill} />;
                    })}
                  </ul>
                </div>
                <div className="mt-10">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Backend Development
                  </h4>
                  <ul className="space-y-2 text-gray-600 flex w-full flex-wrap gap-7">
                    {data.skills[1].skills.map((skill, i) => {
                      return <SkillBadge key={i} icon={Server} name={skill} />;
                    })}
                  </ul>
                </div>
                <div className="mt-10">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Tools & Others
                  </h4>
                  <ul className="space-y-2 text-gray-600 flex w-full flex-wrap gap-7">
                    {data.skills[2].skills.map((skill, i) => {
                      return (
                        <SkillBadge key={i} icon={Terminal} name={skill} />
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
              >
                Download Resume <ArrowRight size={18} className="ml-1" />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Experience data={data} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Projects
            </h2>
            <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work across various industries and
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((projectObj) => {
              return (
                <ProjectCard
                  title={projectObj.title || "Crypto Dashboard"}
                  description={
                    projectObj.description ||
                    "Real-time cryptocurrency tracking dashboard with advanced analytics and portfolio management."
                  }
                  image={randomImage}
                  link={projectObj.link || "#"}
                />
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="px-6 py-3 rounded-md border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your
              vision to life.
            </p>
          </div>

          <div className=" md:grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href={data.email}
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a
                      href={data.linkedIn}
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      {data.linkedIn}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Github className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <a
                      href={data.gitHub}
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      {data.gitHub}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Availability
              </h3>
              <p className="text-gray-600 mb-4">
                I'm currently available for freelance projects and consulting
                work. My typical response time is within 24 hours.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md inline-flex items-center">
                <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                Available for new projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">
                {data.name}
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Creating beautiful, functional digital experiences that help
                businesses grow and succeed in the digital world.
              </p>
              <div className="flex space-x-4">
                <a
                  href={data.gitHub}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={data.linkedIn}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} {data.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LightThemeTemplate;
