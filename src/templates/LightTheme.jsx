import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">Portfolio</span>
          </div>

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
              href="#"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
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

// Project Card Component
const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
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
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonial Component
const Testimonial = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <img
            src={image}
            alt={author}
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-gray-600 italic mb-4">"{quote}"</p>
          <div>
            <h4 className="font-medium text-gray-900">{author}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function LightThemeTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Creative <span className="text-indigo-600">Designer</span> &{" "}
                <span className="text-indigo-600">Developer</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                I craft beautiful, functional digital experiences that help
                businesses grow and succeed in the digital world.
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
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-sm blur opacity-25"></div>
                <div className="relative bg-white rounded-sm overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Portfolio Owner"
                    className="w-full h-auto"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Working on projects"
                className="rounded-sm shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in design and development, I've
                helped dozens of clients transform their digital presence. My
                approach combines aesthetic sensibility with technical expertise
                to create solutions that are both beautiful and functional.
              </p>
              <p className="text-gray-600 mb-6">
                I specialize in responsive web design, user experience, and
                front-end development, with a focus on creating accessible and
                performant websites that deliver results.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Design Skills
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>UI/UX Design</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Brand Identity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Technical Skills
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
              >
                Download Resume <ArrowRight size={18} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
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
            <ProjectCard
              title="E-commerce Redesign"
              description="A complete redesign of an e-commerce platform, focusing on improving user experience and conversion rates."
              image="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              tags={["React", "Next.js", "Tailwind CSS"]}
              link="#"
            />
            <ProjectCard
              title="Finance Dashboard"
              description="An interactive dashboard for financial data visualization, helping users track investments and expenses."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              tags={["TypeScript", "D3.js", "Firebase"]}
              link="#"
            />
            <ProjectCard
              title="Travel Blog"
              description="A responsive blog platform for travel enthusiasts, featuring rich media content and social sharing capabilities."
              image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              tags={["React", "GraphQL", "Tailwind CSS"]}
              link="#"
            />
            <ProjectCard
              title="Health & Fitness App"
              description="A mobile-first web application for tracking workouts, nutrition, and health metrics with personalized recommendations."
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              tags={["React Native", "Redux", "Node.js"]}
              link="#"
            />
            <ProjectCard
              title="Educational Platform"
              description="An interactive learning platform with course management, progress tracking, and video content delivery."
              image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
              tags={["Vue.js", "Express", "MongoDB"]}
              link="#"
            />
            <ProjectCard
              title="Real Estate Website"
              description="A property listing website with advanced search functionality, virtual tours, and agent contact features."
              image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
              tags={["React", "Mapbox", "Strapi CMS"]}
              link="#"
            />
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Client Testimonials
            </h2>
            <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              What my clients say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Working with this designer was a game-changer for our business. The website not only looks stunning but has significantly improved our conversion rates."
              author="Sarah Johnson"
              role="CEO, TechStart"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <Testimonial
              quote="Exceptional attention to detail and a true understanding of our brand. The redesign perfectly captured our vision while improving user experience."
              author="Michael Chen"
              role="Marketing Director, GrowthBrand"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            />
            <Testimonial
              quote="Not only is the design work top-notch, but the technical implementation is flawless. Our site is now faster, more responsive, and easier to maintain."
              author="Emily Rodriguez"
              role="Product Manager, InnovateCo"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
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

          <div className="grid grid-cols-2 gap-9 ">
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
                      href="mailto:hello@example.com"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a href="#" className="text-gray-600 hover:text-indigo-600">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Github className="text-indigo-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <a href="#" className="text-gray-600 hover:text-indigo-600">
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
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
                Portfolio
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Creating beautiful, functional digital experiences that help
                businesses grow and succeed in the digital world.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
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
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LightThemeTemplate;
