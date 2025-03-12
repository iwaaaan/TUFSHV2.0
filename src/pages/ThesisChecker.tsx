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
} from 'lucide-react';
import Header from '../components/Header';

type TableData = string[];

function ThesisChecker() {
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
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQRsMMfualScVhiKw8xylAAwvXNqxH9_v8qYDGjeJ2CxrZ3NpqJGoh2JmeRwJMP1bISovXGeHX_NOHm/pub?output=csv&gid=2054449473'
        );

        if (!response.ok) {
          throw new Error('Gagal mengambil data dari server');
        }

        const csvData = await response.text();

        Papa.parse(csvData, {
          complete: (results) => {
            const headers = results.data[0] as string[];
            const tableData = results.data.slice(1) as TableData[];

            const tableColumns = headers.map((header, index) =>
              columnHelper.accessor((row) => row[index], {
                id: header,
                header: () => header,
                cell: (info) => info.getValue(),
              })
            );

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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Cek Judul Skripsi
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Database judul skripsi mahasiswa Fakultas Syariah dan Hukum UIN
            Sunan Gunung Djati Bandung. Gunakan fitur pencarian untuk menemukan
            judul yang sudah pernah diajukan.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          {error ? (
            <div className="flex items-center gap-3 text-red-600 dark:text-red-400 p-4 bg-red-50 dark:bg-red-400/10 rounded-lg border border-red-200 dark:border-red-400/20">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={globalFilter ?? ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cari judul skripsi..."
                  />
                </div>
              </div>

              <div className="relative overflow-x-auto">
                {isLoading && (
                  <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="flex items-center gap-3">
                      <Loader2 className="h-6 w-6 animate-spin text-blue-500 dark:text-blue-400" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Memuat data...
                      </p>
                    </div>
                  </div>
                )}

                <table className="w-full text-left">
                  <thead className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th key={header.id} className="px-4 py-3 font-medium">
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
                            className="px-4 py-3 whitespace-normal text-gray-900 dark:text-gray-300"
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

              <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-400">
                <div className="text-sm">
                  Menampilkan{' '}
                  {table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                    1}{' '}
                  -{' '}
                  {Math.min(
                    (table.getState().pagination.pageIndex + 1) *
                      table.getState().pagination.pageSize,
                    table.getFilteredRowModel().rows.length
                  )}{' '}
                  dari {table.getFilteredRowModel().rows.length} data
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-sm">
                    Halaman {table.getState().pagination.pageIndex + 1} dari{' '}
                    {table.getPageCount()}
                  </span>
                  <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-5 w-5" />
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

export default ThesisChecker;