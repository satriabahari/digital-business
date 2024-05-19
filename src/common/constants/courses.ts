import type { CoursesProps } from "../types/courses";

export const COURSES: CoursesProps[] = [
  {
    title: "Kursus Pemrograman Dasar",
    price: "Rp 1.000.000",
    advantages: [
      "Materi mudah dipahami",
      "Dukungan mentor 24/7",
      "Proyek akhir untuk portofolio",
      "Akses ke forum diskusi",
    ],
    icon: "hexagon-dice",
  },
  {
    title: "Kursus Pemrograman Web",
    price: "Rp 2.000.000",
    advantages: [
      "Belajar HTML, CSS, dan JavaScript",
      "Proyek web responsif",
      "Pengetahuan tentang SEO",
      "Panduan membuat website dinamis",
    ],
    icon: "bolt",
    promotion: "Best Seller",
  },
  {
    title: "Kursus Pemrograman Mobile",
    price: "Rp 3.000.000",
    advantages: [
      "Pengembangan aplikasi Android dan iOS",
      "Belajar Kotlin dan Swift",
      "Integrasi dengan API",
      "Optimasi performa aplikasi",
    ],
    icon: "hexagon",
  },
];
