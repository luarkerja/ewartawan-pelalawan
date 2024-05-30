"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./components/ui/button";
import { CircleArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div>
      <h2>Halaman tidak ditemukan</h2>
      <p>
        Halaman yang anda tuju tidak ditemukan, pastikan url yang anda masukkan
        benar
      </p>
      <Button
        size="lg"
        className="gap-4"
        type="button"
        onClick={() => router.push("/")}
      >
        <CircleArrowLeft className="w-4 h-4" /> Kembali ke Beranda
      </Button>
    </div>
  );
}
