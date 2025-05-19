import React from 'react';

const ProjectCard = ({ title, projectLink, githubLink, description, achievements, technologies }) => {
  return (
    <div className="rounded-xl bg-background text-inverse shadow-sm border border-inverse/20 hover:shadow-lg hover-inverse transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up">
      <div className="flex flex-col space-y-3 p-6">
        <div className="flex flex-wrap justify-between gap-2 items-center">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight">
              <a
                href={projectLink}
                className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </h3>
          </div>

          <div className="flex gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-inverse hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide-icon"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>

        <div className="flex gap-4 flex-col pt-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-3 items-center">
              <svg
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide-icon icon-inverse flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <p className="text-sm">{achievement}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0 flex flex-col items-start gap-3">
        <div className="flex flex-wrap gap-2 justify-start w-full">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-zinc-400 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 px-3 py-1 text-xs font-medium transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;