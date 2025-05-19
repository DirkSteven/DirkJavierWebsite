import React from 'react';
import myPic from '../assets/pic.jpg';

const MeSection = () => {
  const handleScrollToCollaborate = () => {
    const collaborateSection = document.getElementById('contact-me');
    if (collaborateSection) {
      collaborateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-wrap flex-col md:flex-row items-center justify-center gap-0 md:gap-6 p-4 py-12 bg-background">
      {/* Text Content */}
      <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left mb-0 md:mb-4 order-2 md:order-none animate-fade-in">
        <h1 className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold tracking-tighter -ml-1">
          Dirk
        </h1>

        <div className="flex gap-2 mt-4">
          <div className="text-md md:text-3xl font-bold leading-snug tracking-wide text-inverse">
            <span>Code for screens of all sizes.</span>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-1">
            <svg
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              className="size-5 icon-inverse"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-sm font-bold text-inverse">
              Batangas City, Philippines
            </p>
          </div>
        </div>

        <p className="mt-4 text-base text-inverse leading-relaxed">
          I build simple, functional applications <br />
          for web, mobile, and desktop—crafted to just work.
        </p>

        <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-6">
          <button
            onClick={handleScrollToCollaborate}
            className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-gray-900 text-white text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 px-6 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-transparent animate-shimmer-dot-loop dark:ring-2 dark:ring-blue-500 dark:ring-offset-2"
          >
            <span className="relative z-10">Get in touch</span>
            <svg
              width="18"
              height="18"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide-icon ml-2 relative z-10"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-full md:w-auto flex items-center justify-center order-1 md:order-none animate-fade-in-up">
        <img
          className="mx-auto my-0 md:my-4 size-48 md:size-64 rounded-full object-cover object-top p-1 outline outline-1 outline-inverse/50 transition-transform duration-300 hover:scale-105 hover:outline-offset-4 hover:outline-2"
          src={myPic}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default MeSection;