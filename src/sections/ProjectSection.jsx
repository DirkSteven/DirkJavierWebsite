import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const FEATURED_COUNT = 2;

const ProjectSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState('All');

  const handleShowMore = () => setIsExpanded(true);
  const handleShowLess = () => setIsExpanded(false);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(project => project.status === filter);

  return (
    <div id="projects" className="w-full flex flex-col items-center gap-6 p-4 pt-12 pb-6 bg-background text-inverse">
      <h1 className="mt-8 text-center text-5xl font-extrabold tracking-normal md:text-7xl relative animate-fade-in">
        <span className="inline-block transition-transform hover:scale-110 duration-300">
          projects i've worked on.
        </span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-80"></span>
      </h1>

      <div className="flex flex-col justify-center gap-6 w-full max-w-6xl">
        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, FEATURED_COUNT).map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>



        {/* Show More */}
        {!isExpanded && (
          <div
            className="flex flex-col justify-center items-center cursor-pointer hover-inverse transition-all duration-300 py-4 rounded-full"
            onClick={handleShowMore}
          >
            <p className="text-inverse font-semibold text-center">Show more</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon icon-inverse"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        )}

        {/* Expanded Projects */}
        {isExpanded && (
          <div>
            {/* Sorting Tabs Container */}
            <div className="w-full bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl">
              <div className="flex justify-center gap-2">
                {[
                  { name: 'All', icon: 'Folder' },
                  { name: 'Completed', icon: 'CheckCircle' },
                  { name: 'On-Going', icon: 'Clock' },
                ].map(({ name, icon }) => (
                  <button
                    key={name}
                    onClick={() => setFilter(name)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                      ${
                        filter === name
                          ? 'bg-zinc-200 dark:bg-zinc-800 text-white dark:text-inverse shadow-md'
                          : 'bg-background text-zinc-700 dark:text-zinc-300 hover-inverse'
                      }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {icon === 'Folder' && (
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                      )}
                      {icon === 'CheckCircle' && (
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3" />
                      )}
                      {icon === 'Clock' && (
                        <path d="M12 12h.01 M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm1-13v5l4.28 2.54" />
                      )}
                    </svg>
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtered Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div key={index} className="w-full">
                    <ProjectCard {...project} />
                  </div>
                ))
              ) : (
                <p className="text-center text-zinc-600 dark:text-zinc-400 col-span-2">
                  No projects found for this category.
                </p>
              )}
            </div>

            {/* Show Less */}
            <div
              className="flex flex-col justify-center items-center cursor-pointer hover-inverse transition-all duration-300 py-4 rounded-full"
              onClick={handleShowLess}
            >
              <p className="text-inverse font-semibold text-center">Show less</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide-icon icon-inverse"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>


                    
        {/* GITHUB STATS
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full flex justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=DirkSteven&show_icons=true&theme=default&hide_border=true&bg_color=09090b&text_color=ffffff&title_color=ffffff&icon_color=3b82f6&border_color=27272a"
              alt="GitHub Stats"
              className="w-full max-w-[420px]"
            />
          </div>
          <div className="w-full flex justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=DirkSteven&layout=compact&theme=default&hide_border=true&bg_color=09090b&text_color=ffffff&title_color=ffffff&icon_color=3b82f6&border_color=27272a"
              alt="Top Languages"
              className="w-full max-w-[320px]"
            />
          </div>
        </div>  
        
        
        
        */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;