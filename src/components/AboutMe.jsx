import React from 'react';

const AboutMe = () => {
  return (
    <div id="about" className="w-full bg-background text-inverse pt-12 pb-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 p-4">
        {/* Heading with Gradient Underline and Animation */}
        <h1 className="mt-8 text-center text-5xl font-extrabold tracking-normal md:text-7xl relative animate-fade-in">
          <span className="inline-block transition-transform hover:scale-110 duration-300">
            behind the code.
          </span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-80"></span>
        </h1>

        {/* Paragraphs */}
        <div className="flex flex-col gap-5 p-2 animate-fade-in">
          <p className="text-justify indent-10 text-lg tracking-wide leading-relaxed">
            <b className="transition-all duration-300 hover:underline hover:text-blue-500 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded px-1">
              A curious person by nature</b>, I’ve always been drawn to understanding how things work—whether it’s a line of code or a car engine. 
              <b className="transition-all duration-300 hover:underline hover:text-blue-500 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded px-1">
              I started my tech tinkering journey during my childhood with my old and reliable AMD FX 6400</b>, tinkering with small projects, and haven’t stopped since. I thrive on solving problems, learning new tech, and building apps that make life a bit easier.
          </p>
          <p className="text-justify indent-10 text-lg tracking-wide leading-relaxed">
            <b className="transition-all duration-300 hover:underline hover:text-blue-500 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded px-1">
              A music enjoyer</b> (want a playlist reco? hit me up!). 
            <b className="transition-all duration-300 hover:underline hover:text-blue-500 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded px-1">
              A sports fan</b> (a self-proclaimed armchair analyst 🫠). 
            <b className="transition-all duration-300 hover:underline hover:text-blue-500 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded px-1">
              A hobbyist tinkerer</b>—cars, wood, metal, no project too random. Just my way of unwinding. <b className="transition-all duration-300 hover:underline hover:text-blue-500 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded px-1">And more importantly, your friendly neighborhood dev, one bug report away.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;