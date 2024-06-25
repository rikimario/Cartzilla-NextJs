"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    // <div className="dark:bg-[#181D25] h-screen bg-gradient-to-r from-[#ACCBEE] to-[#E7F0FD]">
    <div className="dark:bg-[#181D25] items-center justify-center flex">
      <Carousel
        plugins={[plugin.current]}
        className="w-full p-4 md:px-12 lg:px-[7.6rem]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem>
              <div className="">
                <Card className="bg-gradient-to-r from-[#ACCBEE] to-[#E7F0FD] dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632]">
                  <CardContent className="flex min-h-[30rem] items-center justify-center">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
