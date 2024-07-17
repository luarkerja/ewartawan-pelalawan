"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import data from "@/data/testimoni.json"

type TestimoniData   = {
  testimoni: {
    id: number;
    name: string;
    image: string;
    isi: string;
  };
};

const Testi = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const [items, setItems] = useState<TestimoniData["testimoni"][]>([]);

  useEffect(() => {
    setItems(data.testimoni);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <>
    <div className="">
      <div className="w-full py-20 lg:py-40">
        <div className="mx-auto grid max-w-6xl gap-2">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Apa kata mereka tentang <br></br>e-wartawan pelalawan.
          </h2>
          <Carousel setApi={setApi} className="mx-auto grid max-w-6xl gap-2">
            <CarouselContent>
            {items.map((item, key) => (
                <CarouselItem className="lg:basis-1/3" key={key}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6  flex justify-between flex-col">
                    {/* <User className="w-8 h-8 stroke-1" /> */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        {/* <h3 className="text-xl tracking-tight">
                          Best decision
                        </h3> */}
                        <p className="text-muted-foreground max-w-xs text-base">
                          {item.isi}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        {/* <span className="text-muted-foreground">Oleh:</span>{" "} */}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={item.image} />
                          <AvatarFallback>{item.name}</AvatarFallback>
                        </Avatar>
                        <span>{item.name}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Testi;
