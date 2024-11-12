import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css"; 
import { ThemeProvider } from "../components/theme-provider";

import Transition from "./template";
import Navbar from "../components/navbar";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Wartawan Pelalawan",
  description:
    "Meningkatkan efisiensi kerja para jurnalis, mendukung transparansi informasi, dan mempercepat penyebaran berita kepada publik. Dengan aplikasi ini, wartawan dapat menjalankan tugasnya dengan lebih efektif dan profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className={DMSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
  );
}
