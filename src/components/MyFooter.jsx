import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MyFooter = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="flex flex-col items-center justify-center py-4 bg-background">
      <p className="flex items-center text-sm text-inverse">
        Made with
        <svg
          className="mx-1 h-4 w-4 text-blue-500 dark:text-blue-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2.4c3.33 0 6.12 2.34 6.78 5.46h-3.36c-.66-1.92-2.46-3.3-4.42-3.3-2.64 0-4.8 2.16-4.8 4.8s2.16 4.8 4.8 4.8c1.98 0 3.78-1.38 4.44-3.3h3.36c-.66 3.12-3.45 5.46-6.78 5.46-3.96 0-7.2-3.24-7.2-7.2S8.04 2.4 12 2.4zm0 6c-1.32 0-2.4 1.08-2.4 2.4s1.08 2.4 2.4 2.4 2.4-1.08 2.4-2.4-1.08-2.4-2.4-2.4z" />
        </svg>
        React
      </p>
    </footer>
  );
};

export default MyFooter;