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

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-purple-400">Name</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium bg-purple-600 text-white hover:bg-purple-700"
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

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
      <div className="h-12 w-12 bg-purple-500/10 rounded-sm flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <div className="group bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white font-medium hover:text-purple-400"
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillBadge = ({ icon: Icon, name }) => {
  return (
    <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-750 transition-colors group">
      <div className="bg-purple-500/10 rounded-full p-1.5">
        <Icon className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
      </div>
      <span className="text-gray-300 group-hover:text-white font-medium">
        {name}
      </span>
    </div>
  );
};

function AtomTheme() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Crafting Digital{" "}
              <span className="text-purple-400">Experiences</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">Full-stack developer</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                View My Work <ChevronRight size={18} className="ml-1" />
              </a>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="about"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec condimentum orci. Donec vestibulum lacinia magna, eu placerat
              neque gravida quis. Maecenas fermentum felis sit amet magna auctor
              ultrices. Etiam in fermentum magna. Nulla dapibus erat vitae arcu
              volutpat, quis facilisis turpis porttitor. Integer molestie ipsum
              at sem maximus, in faucibus nisi tincidunt. Aliquam nec elit
              vulputate, pulvinar magna eu, sollicitudin elit.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technical Skills
            </h2>
            <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-400">
              Technologies and tools I work with
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge icon={Code} name="JavaScript" />
                <SkillBadge icon={Braces} name="TypeScript" />
                <SkillBadge icon={Layout} name="React.js" />
                <SkillBadge icon={Layers} name="Next.js" />
                <SkillBadge icon={Palette} name="Tailwind CSS" />
                <SkillBadge icon={Code} name="HTML5/CSS3" />
                <SkillBadge icon={Layout} name="Vue.js" />
                <SkillBadge icon={Palette} name="Figma" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge icon={Server} name="Node.js" />
                <SkillBadge icon={Database} name="PostgreSQL" />
                <SkillBadge icon={Database} name="MongoDB" />
                <SkillBadge icon={Terminal} name="GraphQL" />
                <SkillBadge icon={Server} name="Express.js" />
                <SkillBadge icon={Database} name="Redis" />
                <SkillBadge icon={Terminal} name="REST APIs" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge icon={GitBranch} name="Git" />
                <SkillBadge icon={Terminal} name="Docker" />
                <SkillBadge icon={Server} name="AWS" />
                <SkillBadge icon={Terminal} name="Linux" />
                <SkillBadge icon={Terminal} name="CI/CD" />
                <SkillBadge icon={Terminal} name="Jest" />
                <SkillBadge icon={Terminal} name="Webpack" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Code}
              title="Web Development"
              description="Building responsive websites with clean, efficient, and maintainable code."
            />
            <ServiceCard
              icon={Palette}
              title="UI/UX Design"
              description="Creating intuitive and engaging user experiences with modern design principles."
            />
            <ServiceCard
              icon={Globe}
              title="SEO Optimization"
              description="Improving website visibility and search engine rankings for better reach."
            />
            <ServiceCard
              icon={Zap}
              title="Performance"
              description="Optimizing website speed and performance for the best user experience."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
            <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Crypto Dashboard"
              description="Real-time cryptocurrency tracking dashboard with advanced analytics and portfolio management."
              image="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80"
              tags={["React", "TypeScript", "TailwindCSS"]}
              link="#"
            />
            <ProjectCard
              title="AI Content Platform"
              description="Content generation platform powered by AI, helping creators produce high-quality content efficiently."
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              tags={["Next.js", "OpenAI", "MongoDB"]}
              link="#"
            />
            <ProjectCard
              title="Social Analytics"
              description="Social media analytics dashboard providing insights and performance metrics for content creators."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              tags={["Vue.js", "D3.js", "Firebase"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <span className="text-xl font-bold text-purple-400">
                &lt;Portfolio /&gt;
              </span>
              <p className="mt-2 text-gray-400">
                Building digital experiences that matter.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AtomTheme;
