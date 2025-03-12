import React, { useEffect, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import Papa from 'papaparse';
import {
  AlertCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Search,
  ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import SecureText from '../components/SecureText';
import { useAntiScraping } from '../hooks/useAntiScraping';

type TableData = string[];

function Contact() {
  useAntiScraping();
  
  const [data, setData] = useState<TableData[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnHelper = createColumnHelper<TableData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vRUZEXfMjizVajtTOWPjYBbnn7lwmPYGbRERrdiqe0xf9V4wj1zmgf8ZVCdrO467t5B526YDbTqS1aA/pub?output=csv&gid=193656765'
        );

        if (!response.ok) {
          throw new Error('Gagal mengambil data dari server');
        }

        const csvData = await response.text();

        Papa.parse(csvData, {
          complete: (results) => {
            const headers = results.data[0] as string[];
            const tableData = results.data.slice(1) as TableData[];

            const tableColumns = [
              columnHelper.accessor((row) => row[0], {
                id: 'NO',
                header: 'NO',
                cell: (info) => <SecureText text={info.getValue()} />,
              }),
              columnHelper.accessor((row) => row[1], {
                id: 'NAMA DOSEN',
                header: 'NAMA DOSEN',
                cell: (info) => <SecureText text={info.getValue()} className="font-medium" />,
              }),
              columnHelper.accessor((row) => row[2], {
                id: 'No WA',
                header: 'WA',
                cell: (info) => {
                  const value = info.getValue();
                  const formattedNumber = value.startsWith('0') 
                    ? `62${value.substring(1)}` 
                    : value.startsWith('62') 
                      ? value 
                      : `62${value}`;
                  return (
                    <a
                      href={`https://wa.me/${formattedNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      onClick={(e) => {
                        if (e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1) {
                          e.preventDefault();
                          return false;
                        }
                      }}
                    >
                      <SecureText text="Chat" />
                    </a>
                  );
                },
              }),
              columnHelper.accessor((row) => row[3], {
                id: 'SURAT TUGAS',
                header: 'SK',
                cell: (info) => (
                  <a
                    href={info.getValue()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    onClick={(e) => {
                      if (e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1) {
                        e.preventDefault();
                        return false;
                      }
                    }}
                  >
                    <SecureText text="Lihat" />
                  </a>
                ),
              }),
            ];

            setColumns(tableColumns);
            setData(tableData);
            setIsLoading(false);
          },
          error: (error) => {
            setError('Gagal memproses data CSV');
            setIsLoading(false);
          },
        });
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'Terjadi kesalahan saat mengambil data'
        );
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8 select-none">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center select-none">
            📚 Kontak Dosen FSH
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center max-w-4xl mx-auto select-none">
            Halaman ini memuat daftar kontak resmi dosen di Fakultas Syariah dan Hukum untuk keperluan akademik seperti bimbingan, konsultasi, atau klarifikasi materi.
          </p>

          <div className="mt-4 sm:mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-3 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-4 select-none">
              💡 Tips Menghubungi Dosen:
            </h2>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-blue-800 dark:text-blue-200 select-none">
              <li className="flex items-start">
                <span className="mr-1.5 sm:mr-2">✅</span>
                <span><strong>Perhatikan Waktu</strong> – Hormati waktu dosen, hindari menghubungi di luar jam kerja dan saat ibadah.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-1.5 sm:mr-2">✅</span>
                <span><strong>Awali dengan Salam</strong> – Ucapkan salam dengan penuh takzim, seperti "Assalamualaikum"</span>
              </li>
              <li className="flex items-start">
                <span className="mr-1.5 sm:mr-2">✅</span>
                <span><strong>Perkenalkan Diri</strong> – Sebutkan nama, jurusan, dan maksud dengan singkat dan jelas.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-1.5 sm:mr-2">✅</span>
                <span><strong>Bahasa Sopan</strong> – Hindari singkatan dan sampaikan pesan dengan kalimat yang baik dan terstruktur.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-1.5 sm:mr-2">✅</span>
                <span><strong>Tutup dengan Salam</strong> – Ucapkan terima kasih dan tutup dengan doa atau salam yang baik.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-2 sm:p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          {error ? (
            <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 p-3 bg-red-50 dark:bg-red-400/10 rounded-lg border border-red-200 dark:border-red-400/20">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <p>{error}</p>
            </div>
          ) : (
            <div>
              <div className="mb-3 sm:mb-4">
                <div className="relative">
                  <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={globalFilter ?? ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cari nama dosen..."
                  />
                </div>
              </div>

              <div className="relative overflow-x-auto -mx-2 sm:mx-0">
                {isLoading && (
                  <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin text-blue-500 dark:text-blue-400" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Memuat data...
                      </p>
                    </div>
                  </div>
                )}

                <table className="w-full text-left text-sm select-none">
                  <thead className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th key={header.id} className="px-2 sm:px-3 py-2 text-xs font-medium select-none">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="text-sm">
                    {table.getRowModel().rows.map((row, index) => (
                      <tr
                        key={row.id}
                        className={`
                          border-b border-gray-200 dark:border-gray-700 
                          hover:bg-gray-50 dark:hover:bg-gray-700/50
                          ${
                            index % 2 === 0
                              ? 'bg-white dark:bg-gray-800'
                              : 'bg-gray-50/50 dark:bg-gray-700/30'
                          }
                        `}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="px-2 sm:px-3 py-2 text-xs sm:text-sm whitespace-normal text-gray-900 dark:text-gray-300 select-none"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                <div className="select-none order-2 sm:order-1">
                  {table.getFilteredRowModel().rows.length} data
                </div>

                <div className="flex items-center gap-1 sm:gap-2 order-1 sm:order-2">
                  <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed select-none"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="select-none">
                    {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
                  </span>
                  <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed select-none"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;