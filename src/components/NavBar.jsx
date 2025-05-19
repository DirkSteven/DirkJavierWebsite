import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact Me', href: '#contact-me' },
    { name: 'Resume', href: '/Javier_Resume_2025v2.pdf', download: true },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const sectionId = href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      } else {
        console.warn(`Section with ID "${sectionId}" not found`);
      }
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact-me'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      } else {
        console.warn(`Section with ID "${id}" not found in DOM`);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full flex gap-4 bg-background bg-opacity-50 backdrop-blur-lg p-3">
      {/* Left Side: Brand Name */}
      <div className="flex flex-auto items-center">
        <a
          href="#home"
          className="cursor-pointer"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <p className="text-xl font-extrabold text-inverse">DirkJavier.</p>
        </a>
        {/* Desktop Navigation Items */}
        <div className="hidden md:flex gap-4 ml-4">
          {navItems.map((item) => (
            item.download ? (
              <a
                key={item.name}
                href={item.href}
                download
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded text-inverse hover-inverse transition-colors"
              >
                <p>{item.name}</p>
              </a>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded text-inverse hover-inverse transition-colors ${
                  item.href.slice(1) === activeSection ? 'active' : ''
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <p>{item.name}</p>
                <svg
                  width="12"
                  height="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="lucide-icon lucide-arrow-down-right icon-inverse"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </a>
            )
          ))}
        </div>
      </div>

      {/* Right Side: Social Icons, Theme Toggle, and Mobile Menu Button */}
      <div className="flex items-center gap-4 md:gap-2">
        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex gap-2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dirkjaviermvp@gmail.com"
            className="flex items-center p-2 rounded text-inverse hover-inverse transition-colors"
            aria-label="Email"
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
          </a>
          <a
            href="https://www.linkedin.com/in/dirk-javier-22575819a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 rounded text-inverse hover-inverse transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 icon-inverse"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex">
          <button
            onClick={toggleTheme}
            className="relative flex items-center p-2 rounded text-inverse hover-inverse transition-colors"
            aria-label="Toggle theme"
          >
            <svg
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              className={`h-5 w-5 icon-inverse transition-transform ${
                isDarkMode ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              className={`absolute h-5 w-5 icon-inverse transition-transform ${
                isDarkMode ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden flex items-center gap-2 p-2 rounded text-inverse hover-inverse transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 icon-inverse"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 7 7 17"></path>
            <path d="M17 17H7V7"></path>
          </svg>
          <p className="font-bold uppercase text-sm">Menu</p>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background bg-opacity-95 backdrop-blur-lg">
          <div className="flex flex-col items-center gap-6 p-6">
            {/* Navigation Items */}
            {navItems.map((item) => (
              item.download ? (
                <a
                  key={item.name}
                  href={item.href}
                  download
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded text-inverse hover-inverse transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <p>{item.name}</p>
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded text-inverse hover-inverse transition-colors ${
                    item.href.slice(1) === activeSection ? 'active' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <p>{item.name}</p>
                </a>
              )
            ))}

            {/* Social Icons (Mobile) */}
            <div className="flex gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dirkjaviermvp@gmail.com"
                className="flex items-center p-2 rounded text-inverse hover-inverse transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Email"
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
              </a>
              <a
                href="https://www.linkedin.com/in/dirk-javier-22575819a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 rounded text-inverse hover-inverse transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 icon-inverse"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center p-2 rounded text-inverse hover-inverse transition-colors"
              aria-label="Toggle theme"
            >
              <svg
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                className={`h-5 w-5 icon-inverse transition-transform ${
                  isDarkMode ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
              <svg
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                className={`absolute h-5 w-5 icon-inverse transition-transform ${
                  isDarkMode ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;