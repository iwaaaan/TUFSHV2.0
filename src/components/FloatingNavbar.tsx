import React from 'react';
import { Home, HelpCircle, Phone, GraduationCap, BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const FloatingNavbar: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="inline-flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm ${
              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`
          }
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm ${
              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`
          }
        >
          <HelpCircle className="h-4 w-4" />
          <span>FAQ</span>
        </NavLink>
        <NavLink
          to="/layanan"
          className={({ isActive }) =>
            `flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm ${
              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`
          }
        >
          <GraduationCap className="h-4 w-4" />
          <span>Prodi</span>
        </NavLink>
        <NavLink
          to="/thesis-checker"
          className={({ isActive }) =>
            `flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm ${
              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`
          }
        >
          <BookOpen className="h-4 w-4" />
          <span>Judul</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center space-x-1.5 px-3 py-2 text-xs sm:text-sm ${
              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`
          }
        >
          <Phone className="h-4 w-4" />
          <span>Kontak</span>
        </NavLink>
      </div>
    </div>
  );
}

export default FloatingNavbar;