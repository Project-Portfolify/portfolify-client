import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import uzma from '../assets/uzma.jpeg';
import luis from '../assets/luis.jpg';
import david from '../assets/david.jpg';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-gray-100 flex items-center justify-center px-4 py-8">

            <div className="max-w-4xl">
                {/* Título */}
                <h1 className="text-4xl font-extrabold mb-6 text-center">About Us</h1>

                {/* Descripción */}
                <p className="text-lg leading-relaxed mb-6 text-center">
                    Welcome to <span className="font-bold">Portfolify</span> – a dynamic platform created to help you showcase your creativity and professional work. We are a passionate duo, <span className="font-bold">Uzma</span> and <span className="font-bold">David</span>, dedicated to providing a seamless and innovative experience for building your portfolio.
                </p>

                {/* Perfiles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Uzma */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={uzma}
                            alt="Uzma"
                            className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Uzma</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Founder & Developer</p>
                        <div className="flex gap-3 mt-2">
                            <a 
                                href="https://www.linkedin.com/in/shaik-uzma/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="https://github.com/Uzmashaik93" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* David */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={david}
                            alt="David"
                            className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700"
                        />
                        <h3 className="mt-4 text-xl font-semibold">David</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Co-Founder & Developer</p>
                        <div className="flex gap-3 mt-2">
                            <a 
                                href="https://www.linkedin.com/in/davidrepetto1/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="https://github.com/Dvdrepetto" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Luis */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={luis}
                            alt="Luis"
                            className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700"
                        />
                        <h3 className="mt-4 text-xl font-semibold">Luis</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Professor & Mentor</p>
                        <div className="flex gap-3 mt-2">
                            <a 
                                href="https://www.linkedin.com/in/luisjunco/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="https://github.com/luisjunco" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Agradecimiento */}
                <p className="text-lg leading-relaxed mt-8 text-center">
                    We would also like to extend our sincere gratitude to our professor, <span className="font-bold">Luis</span>, whose invaluable guidance and support have been instrumental in making this project a reality.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
