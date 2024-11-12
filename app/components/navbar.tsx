"use client";

import React from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const NavLinks = [
  { id: 1, name: "Beranda", path: "/" },
  // { id: 2, name: "Berita", path: "/berita" },
  { id: 3, name: "Pengumuman", path: "/pengumuman" },
  { id: 4, name: "Bantuan", path: "/bantuan" },
  { id: 5, name: "Kontak", path: "/kontak" },
];
const Navbar = () => {
  const router = useRouter();

  const pathname = usePathname();
const isActive = (path: string) => path === pathname;

  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-muted/40">
      <div className="mx-auto grid w-full max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">
            E-Wartawan
          </span>
          <div className="flex items-center justify-between space-x-6 text-gray-900 ">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.path}
                  className={
                    isActive(link.path) ? "text-primary" : "hover:text-primary"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
            <ModeToggle />
            <Button
              size="lg"
              className="gap-4 bg-muted/40 hover:bg-primary hover:text-white"
              variant="outline"
              type="button"
              onClick={() => router.push("/login")}
            >
              Masuk
              <LogIn className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
