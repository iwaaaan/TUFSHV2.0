import React from 'react';
import {
  Sun,
  Moon,
  Link as LinkIcon,
  HelpCircle,
  Phone,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const getHeaderContent = () => {
    switch (location.pathname) {
      case '/':
        return {
          icon: LinkIcon,
          title: 'Layanan TU FSH',
        };
      case '/faq':
        return {
          icon: HelpCircle,
          title: 'FAQ',
        };
      case '/layanan':
        return {
          icon: GraduationCap,
          title: 'Layanan Jurusan',
        };
      case '/contact':
        return {
          icon: Phone,
          title: 'Kontak',
        };
      case '/thesis-checker':
        return {
          icon: BookOpen,
          title: 'Cek Judul Skripsi',
        };
      default:
        return {
          icon: LinkIcon,
          title: 'Layanan TU FSH',
        };
    }
  };

  const { icon: Icon, title } = getHeaderContent();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 dark:text-blue-400 flex-shrink-0" />
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              {title}
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;