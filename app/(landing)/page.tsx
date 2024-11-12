"use client";

import {
  Building2,
  HandCoins,
  MoveRight,
  Newspaper,
  PhoneCall,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Testi from "@/components/arte/testi";

import { motion } from "framer-motion";
import Footer from "@/components/footer";
import BeritaLanding from "@/components/berita-landing";
import Trusted from "@/components/trusted";
import { CTA2 } from "@/components/cta";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function HomePage() {
  const router = useRouter();
  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  // testimoni di halaman kontak 

  return (
    <>
    
    <div className="w-full py-20 lg:py-40">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl font-medium md:text-7xl max-w-lg tracking-tighter text-left">
                E-Wartawan Kabupaten Pelalawan
              </h1>
              <TextGenerateEffect words="Meningkatkan Optimalisasi dan efektifitas kerjasama antara
                Pemerintah Kabupaten Pelalawan dengan Media Massa dan Insan
                Pers, dengan mengutamakan transparansi, efisiensi, akuntabilitas
                dan taat administrasi." className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-left" />
              
            </div>
            <div className="flex flex-row gap-4">
              <Button
                size="lg"
                className="gap-4"
                variant="outline"
                type="button"
                onClick={() => router.push("/kontak")}
              >
                Kontak Kami <PhoneCall className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                className="gap-4"
                type="button"
                onClick={() => router.push("/login")}
              >
                Daftar sekarang <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square"></div>
            <div className="bg-muted rounded-md row-span-2"></div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-32 my-20 bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate="visible"
              className="box"
              transition={{ delay: 0.2 }}
            >
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-primary">
                <Building2 className="w-8 h-8 mb-8 text-white/90" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-semibold flex flex-row gap-4 items-end text-white/90">
                  20
                  {/* <span className="text-muted-foreground text-sm tracking-normal">
              +20.1%
            </span> */}
                </h2>
                <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white/70">
                  Media Terdaftar
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate="visible"
              className="box"
              transition={{ delay: 0.4 }}
            >
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-primary">
              <Newspaper className="w-8 h-8 mb-8 text-white/90" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-white/90">
                1.500
                {/* <span className="text-muted-foreground text-sm tracking-normal">
              -2%
            </span> */}
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white/70">
                Berita advetorial
              </p>
            </div></motion.div>
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate="visible"
              className="box"
              transition={{ delay: 0.6 }}
            >
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-primary">
              <HandCoins className="w-8 h-8 mb-8 text-white/90" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-white/90">
                Rp. 180jt
                {/* <span className="text-muted-foreground text-sm tracking-normal">
              +8%
            </span> */}
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white/70">
                Realisasi anggaran
              </p>
            </div></motion.div>
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate="visible"
              className="box"
              transition={{ delay: 0.8 }}
            >
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md bg-primary">
              <Users className="w-8 h-8 mb-8 text-white/90" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-white/90">
                124
                {/* <span className="text-muted-foreground text-sm tracking-normal">
              +2%
            </span> */}
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white/70">
                Insan pers terdaftar
              </p>
            </div></motion.div>
          </div>
        </div>
      </div>
      <BeritaLanding />
      <Testi />

      <Trusted />
      <CTA2 />
      <Footer />
    </div>
    </>
  );
}
