import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Social icons */}
        <div className="flex gap-4 mb-2">
          <a
            href="https://github.com/Project-Portfolify"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Github size={24} />
          </a>
          
        </div>
        
        {/* Quick navigation links */}
        <div className="flex gap-4 mb-2">
          <a
            href="/about"
            className="text-sm hover:underline hover:text-gray-300 transition-colors"
          >
            About
          </a>
          <a
            href="/"
            className="text-sm hover:underline hover:text-gray-300 transition-colors"
          >
            Home
          </a>
        </div>
        
        {/* Tagline */}
        <div className="mb-2 text-center text-xs italic text-gray-400">
          Building amazing portfolios one project at a time.
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Uzma / David. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
