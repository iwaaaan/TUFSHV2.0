import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import LayananJurusan from './pages/LayananJurusan';
import Contact from './pages/Contact';
import ThesisChecker from './pages/ThesisChecker';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/layanan" element={<LayananJurusan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thesis-checker" element={<ThesisChecker />} />
        </Routes>
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <p className="mb-10">
            Crafted with ❤️ by Fakultas Syariah dan Hukum<br />
            Bagian Akademik FSH • UIN Sunan Gunung Djati Bandung
          </p>
        </footer>
        <FloatingNavbar />
      </div>
    </ThemeProvider>
  );
}

export default App;