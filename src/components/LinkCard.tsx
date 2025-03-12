import React from 'react';
import { Link } from '../types';

interface LinkCardProps {
  link: Link;
  category?: string;
}

const getProfileImage = (category: string, link: Link) => {
  switch (category) {
    case 'Layanan Surat Fakultas':
      return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759932/Liza_re28db.jpg'; // Bu Liza
    case 'Layanan Tugas Akhir - Lab Fakultas':
      return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759929/Soni_Soimun_Romdhoni_nsry53.jpg'; // Pak Soni
    case 'Pranala Penting Lainnya':
      // Map specific links to their respective staff photos
      switch (link.name) {
        case 'Sertifikat Akreditasi':
        case 'Helpdesk PDDikti FSH':
        case 'Validasi Wisuda':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759932/Iwan_Taufik_Hidayat_wlwqhm.jpg'; // Pak Iwan
        case 'Pengajuan SKL Munaqosah':
        case 'Pengajuan SKL Komprehensif':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759932/Ihsan_Badhowi_wa2cka.jpg'; // Pak Ihsan
        case 'Layanan Akademik HES':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HES_-_Sanan_Ropikin_xu6pem.jpg'; // Pak Sanan
        case 'Layanan Akademik IH':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759932/IH_-_Iwa_Ramdhani_Kosasih_SH_lpa1fk.jpg'; // Pak IWA
        case 'Layanan Akademik HTN':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HTN_-_Ismail_S_zovvv5.jpg'; // Pak Ismail
        case 'Layanan Akademik HK':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HK_-_Ahmad_Maula_Hadi_S.H._M.H._gmprgb.jpg'; // Pak Ahmad
        case 'Layanan Akademik PM':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759930/Yanis_Alghalayini_S.E_jdchni.jpg'; // Pak Yanis
        case 'Layanan Akademik HPI':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759929/HPI_-_Dede_Romadhona_xq1zsj.jpg'; // Pak Dede
        case 'Layanan Akademik Pengambilan Ijazah':
        case 'Layanan Peminjaman Barang & Aula':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759930/Ahmad_Zaini_S.Sos_gzefxi.jpg'; // Pak Ahmad Zaini
        case 'Layanan Legalisir Ijazah':
          return 'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759929/Syahida_xghxq9.jpg'; // Bu Syahida
        default:
          return `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64`;
      }
    default:
      return `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64`;
  }
};

const LinkCard: React.FC<LinkCardProps> = ({ link, category }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="p-[0.6rem]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src={category ? getProfileImage(category, link) : `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64`}
                alt={link.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/40x40/374151/9CA3AF?text=?';
                }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 break-words">
                    {link.name}
                  </h4>
                </div>
                {link.description && (
                  <p className="text-[12px] font-light text-gray-600 dark:text-gray-400 line-clamp-2 w-full">
                    {link.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default LinkCard;