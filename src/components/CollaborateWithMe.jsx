import React from 'react';

const CollaborateWithMe = () => {
  return (
    <div id="contact-me" className="min-h-screen w-full flex flex-col items-center justify-center gap-6 p-4 py-12 bg-background text-inverse animate-fade-in">
        <h1 className="mt-8 text-center text-5xl font-extrabold tracking-normal md:text-7xl relative animate-fade-in">
          <span className="inline-block transition-transform hover:scale-110 duration-300">
            connect with me.
          </span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-80"></span>
        </h1>

      <p className="text-center text-base md:text-lg text-dark-on-light leading-relaxed max-w-2xl animate-fade-in-up">
        Let’s build something together. No fluff, just great work. Tell me about your project!
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 animate-fade-in-up">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dirk-javier-22575819a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-background hover-inverse text-inverse transition-all duration-300"
        >
          <svg
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide-icon icon-inverse"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="text-sm font-semibold">LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dirkjaviermvp@gmail.com"
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-background hover-inverse text-inverse transition-all duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide-icon icon-inverse"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4H2v16h20V4zm-2 4l-8 5-8-5" />
          </svg>
          <span className="text-sm font-semibold">Email</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/dirk.javier.3/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-background hover-inverse text-inverse transition-all duration-300"
        >
          <svg
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide-icon icon-inverse"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <span className="text-sm font-semibold">Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default CollaborateWithMe;
