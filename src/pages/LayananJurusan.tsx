import React from 'react';
import { Phone, Mail, Globe, Instagram, Facebook } from 'lucide-react';
import Header from '../components/Header';

const departments = [
  {
    name: 'Ilmu Hukum (IH)',
    staff: [
      {
        name: 'Ende Hasbi Nassaruddin, S.H., M.H.',
        role: 'Ketua Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759932/IH_-_Ende_Hasbi_Nassaruddin_S.H._M.H._dfa0zb.jpg',
      },
      {
        name: 'Dian Rahmat Gumelar, S.H., M.H.',
        role: 'Sekretaris Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759932/IH_-_Dian_Rahmat_Gumelar_S.H._M.H._qwli7h.jpg',
      },
      {
        name: 'Iwa Ramdhani Kosasih, SH',
        role: 'Staf Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759932/IH_-_Iwa_Ramdhani_Kosasih_SH_lpa1fk.jpg',
      },
    ],
    contacts: {
      whatsapp: '6281953637469',
      email: 'ilmuhukum@uinsgd.ac.id',
      website: 'https://ilmuhukum.uinsgd.ac.id',
      instagram: 'ilmuhukum.uinsgd',
    },
  },
  {
    name: 'Hukum Keluarga (HK)',
    staff: [
      {
        name: 'Harry Yuniardi, M.Ag.',
        role: 'Ketua Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741761448/Harry_Yuniardi_M.Ag._lrhh6m.jpg',
      },
      {
        name: 'Riyan Ramdhani, S.Sy., M.H.',
        role: 'Sekretaris Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759929/HK_-_Riyan_Ramdhani_S.Sy._M.H._uf43kb.jpg',
      },
      {
        name: 'Ahmad Maula Hadi, S.H., M.H.',
        role: 'Staf Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HK_-_Ahmad_Maula_Hadi_S.H._M.H._gmprgb.jpg',
      },
    ],
    contacts: {
      whatsapp: '6287827695144',
      email: 'hk@uinsgd.ac.id',
      website: 'https://hk.uinsgd.ac.id',
      instagram: 'hukumkeluarga_official',
    },
  },
  {
    name: 'Perbandingan Mazhab (PM)',
    staff: [
      {
        name: 'H. Yayan Khaerul Anwar, S.H.I., M.Ag.',
        role: 'Ketua Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759929/PM_-_H._Yayan_Khaerul_Anwar_S.H.I._M.Ag._ozs8xy.jpg',
      },
      {
        name: 'Fahmi Hasan Nugroho, Lc., M.A.',
        role: 'Sekretaris Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759933/PM_-_Fahmi_Hasan_Nugroho_Lc._M.A._mhjhro.jpg',
      },
      {
        name: 'Yanis Alghalayini, S.E',
        role: 'Staf Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759930/Yanis_Alghalayini_S.E_jdchni.jpg',
      },
    ],
    contacts: {
      whatsapp: '6285176960507',
      email: 'pm@uinsgd.ac.id',
      website: 'https://pm.uinsgd.ac.id',
      instagram: 'pmh.fsh.uinsgd',
    },
  },
  {
    name: 'Hukum Tata Negara (HTN)',
    staff: [
      {
        name: 'Ridwan Eko Prasetyo, S.H.I., M.H.',
        role: 'Ketua Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HTN_-_Ridwan_Eko_Prasetyo_S.H.I._M.H._ozerx7.jpg',
      },
      {
        name: 'Lutfi Fahrul Rizal, S.Sy., M.H.',
        role: 'Sekretaris Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HTN_-_Lutfi_Fahrul_Rizal_S.Sy._M.H._g7heyw.jpg',
      },
      {
        name: 'Ismail, S.H., M,H',
        role: 'Staf Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HTN_-_Ismail_S_zovvv5.jpg',
      },
    ],
    contacts: {
      whatsapp: '62895354900600',
      email: 'htn@uinsgd.ac.id',
      website: 'https://htn.uinsgd.ac.id',
      instagram: 'htn.uinsgd',
      facebook: 'htn.uinsgd',
    },
  },
  {
    name: 'Hukum Pidana Islam (HPI)',
    staff: [
      {
        name: 'Dr. Muhammad Kholid, S.H., M.H.',
        role: 'Ketua Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759930/HPI_-_Deden_Najmudin_M.Sy._rzgmd8.jpg',
      },
      {
        name: 'Deden Najmudin, M.Sy.',
        role: 'Sekretaris Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759930/HPI_-_Deden_Najmudin_M.Sy._rzgmd8.jpg',
      },
      {
        name: 'Dede Romadhona, M.Ag',
        role: 'Staf Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759929/HPI_-_Dede_Romadhona_xq1zsj.jpg',
      },
    ],
    contacts: {
      whatsapp: '628994110516',
      email: 'hpi@uinsgd.ac.id',
      website: 'https://hpi.uinsgd.ac.id',
      instagram: 'prodihpi.uinsgd',
      facebook: 'prodihpi.uinsgd',
    },
  },
  {
    name: 'Hukum Ekonomi Syariah (HES)',
    staff: [
      {
        name: 'Dr. Jaenudin, M.Ag.',
        role: 'Ketua Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759930/HES_-_Dr._Jaenudin_M.Ag._elqfpt.jpg',
      },
      {
        name: 'H. Asro, S.Ag., M.H.',
        role: 'Sekretaris Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HES_-_H._Asro_S.Ag._M.H._yjqr2t.jpg',
      },
      {
        name: 'Sanan Ropikin, S.Pd.',
        role: 'Staf Prodi',
        photo:
          'https://res.cloudinary.com/dq5tfjgvr/image/upload/v1741759931/HES_-_Sanan_Ropikin_xu6pem.jpg',
      },
    ],
    contacts: {
      whatsapp: '6285860623110',
      email: 'hes@uinsgd.ac.id',
      website: 'https://hes.uinsgd.ac.id',
      instagram: 'hes.uinsgd',
    },
  },
];

function LayananJurusan() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {department.name}
                </h2>

                <div className="space-y-4 mb-6">
                  {department.staff.map((person, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              person.name
                            )}&background=random`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {person.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {department.contacts.whatsapp && (
                    <a
                      href={`https://wa.me/${department.contacts.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${department.contacts.email}`}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{department.contacts.email}</span>
                  </a>

                  <a
                    href={department.contacts.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    <span>Website</span>
                  </a>

                  <a
                    href={`https://instagram.com/${department.contacts.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    <span>@{department.contacts.instagram}</span>
                  </a>

                  {department.contacts.facebook && (
                    <a
                      href={`https://facebook.com/${department.contacts.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      <span>{department.contacts.facebook}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LayananJurusan;
