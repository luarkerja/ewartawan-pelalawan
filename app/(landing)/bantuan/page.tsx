"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import data from "@/data/bantuan.json";
import Link from "next/link";
import { CTA2 } from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type Bantuan = {
  bantuan: {
    id: number;
    pertanyaan: string;
    jawaban: string;
  };
};
export default function BantuanPage() {
  const [items, setItems] = useState<Bantuan["bantuan"][]>([]);

  useEffect(() => {
    setItems(data.bantuan);
  }, []);

  return (
    <>
    <Navbar />
    <div className="w-full py-20 lg:py-40">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              {/* <div>
                <Badge variant="outline">Bantuan</Badge>
              </div> */}
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Ini adalah langkah awal untuk memulai.
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  Managing a small business today is already tough. Avoid
                  further complications by ditching outdated, tedious trade
                  methods. Our goal is to streamline SMB trade, making it easier
                  and faster than ever.
                </p>
              </div>
              <div className="">
                <Link href="kontak">
                <Button className="gap-4">
                  Punya pertanyaan? Kontak Kami
                </Button>
                </Link>
                
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full" defaultValue="index-1">
            {items.map((item, key) => (
              <AccordionItem key={item.id} value={"index-" + item.id}>
                <AccordionTrigger className="text-left">{item.pertanyaan}</AccordionTrigger>
                <AccordionContent>{item.jawaban}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="bg-muted/40 mt-20">
            <div className="h-40"></div>
      </div>
    </div>
    <CTA2 />
    <Footer />
    </>
  );
}
