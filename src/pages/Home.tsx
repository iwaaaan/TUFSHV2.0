import React, { useState, useMemo, useRef } from 'react';
import { links } from '../data/links';
import SearchBar from '../components/SearchBar';
import LinkCard from '../components/LinkCard';
import CustomPagination from '../components/Pagination';
import { Link } from '../types';
import { getGreeting } from '../utils/greeting';
import Header from '../components/Header';

const ITEMS_PER_PAGE = 12;

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredLinks = useMemo(() => {
    let result: Link[] = [];

    Object.entries(links).forEach(([category, categoryLinks]) => {
      if (!activeCategory || activeCategory === category) {
        const filtered = categoryLinks.filter(
          (link) =>
            link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            link.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        result = [...result, ...filtered.map(link => ({ ...link, category }))];
      }
    });

    // Only shuffle when showing all categories
    if (!activeCategory) {
      return shuffleArray(result);
    }

    return result;
  }, [searchTerm, activeCategory]);

  const totalPages = Math.ceil(filteredLinks.length / ITEMS_PER_PAGE);
  const paginatedLinks = filteredLinks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const handleSearchFocus = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="fluid-bg text-white rounded-xl p-6 mb-6 overflow-hidden">
            <h1 className="text-xl font-semibold mb-4">
              Hi, {getGreeting()}! #WargaFSH
            </h1>
            <p className="mb-4">
              Pelayanan dan pengiriman surat melalui WhatsApp yang telah
              ditandatangani secara elektronik (TTe) oleh BSrE dilakukan setiap
              hari pada jam kerja. Jika pelayanan sedang penuh, Surat akan
              dikirim keesokan harinya.
            </p>
            <small className="text-sm text-white/80">
              📌 Ketik 1 kata kunci, untuk menghemat waktumu.
            </small>
          </div>
        </div>

        <div className="mb-4 pt-2" ref={searchRef}>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onFocus={handleSearchFocus}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex space-x-3 pb-4 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex-shrink-0 px-[0.8rem] py-[0.4rem] rounded-xl text-[1rem] font-normal transition-all duration-200 ${
                activeCategory === null
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              Semua
            </button>
            {Object.keys(links).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-[0.8rem] py-[0.4rem] rounded-xl text-[1rem] font-normal transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paginatedLinks.map((link, index) => (
            <LinkCard key={index} link={link} category={link.category} />
          ))}
        </div>

        {filteredLinks.length > ITEMS_PER_PAGE && (
          <div className="mt-4">
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        {filteredLinks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada pranala yang ditemukan.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default Home;