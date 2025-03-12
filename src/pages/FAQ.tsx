import React from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';

const faqs = [
  {
    question: 'Bagaimana cara mengajukan surat aktif kuliah?',
    answer: 'Untuk mengajukan surat aktif kuliah, silakan pilih jenis surat yang sesuai di halaman utama (Gaji Orang Tua, Pusda/Umum, atau Beasiswa). Isi formulir yang disediakan dengan lengkap dan benar. Surat akan diproses dan dikirim melalui WhatsApp dalam waktu kerja.'
  },
  {
    question: 'Berapa lama proses pembuatan surat?',
    answer: 'Proses pembuatan surat dilakukan setiap hari kerja. Jika pelayanan sedang normal, surat akan selesai di hari yang sama. Namun jika pelayanan sedang penuh, surat akan dikirim keesokan harinya.'
  },
  {
    question: 'Apakah surat yang dikirim sudah ditandatangani secara elektronik?',
    answer: 'Ya, semua surat yang dikirim sudah ditandatangani secara elektronik (TTe) oleh BSrE dan memiliki kekuatan hukum yang sama dengan tanda tangan manual.'
  },
  {
    question: 'Bagaimana cara mengajukan SK Skripsi?',
    answer: 'Untuk mengajukan SK Skripsi, silakan akses formulir pengajuan SK Skripsi & Tugas Akhir di bagian Layanan Tugas Akhir - Lab Fakultas. Pastikan semua persyaratan telah dipenuhi sebelum mengajukan.'
  },
  {
    question: 'Dimana saya bisa mendapatkan informasi tentang wisuda?',
    answer: 'Informasi tentang wisuda dapat diakses melalui pranala Validasi Wisuda di bagian Pranala Penting Lainnya. Untuk informasi lebih lanjut, silakan hubungi bagian akademik fakultas.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;