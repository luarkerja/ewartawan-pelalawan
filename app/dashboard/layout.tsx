import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./dashboard.css";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Wartawan Pelalawan",
  description:
    "Meningkatkan efisiensi kerja para jurnalis, mendukung transparansi informasi, dan mempercepat penyebaran berita kepada publik. Dengan aplikasi ini, wartawan dapat menjalankan tugasnya dengan lebih efektif dan profesional.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className={DMSans.className}>
          {children}
      </body>
  );
}
