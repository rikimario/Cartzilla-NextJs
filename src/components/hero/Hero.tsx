"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroImages } from "../HeroSliderImgs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Home");
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="items-center justify-center flex">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        onMouseLeave={plugin.current.reset}
        className="w-full py-4"
      >
        <CarouselContent>
          {heroImages.map((hero) => (
            <CarouselItem key={hero.title}>
              <div>
                <Card className="bg-gradient-to-r from-[#ACCBEE] to-[#E7F0FD] dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632]">
                  <CardContent className="flex flex-col lg:flex-row min-h-[30rem] text-center items-center justify-between lg:justify-center lg:text-start lg:gap-12 pt-10">
                    <div className="lg:pl-24">
                      <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                        {hero.p}
                      </p>
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white pt-4">
                        {hero.title}
                      </h1>
                      <Link href="/categories/all-electronics">
                        <div className="pt-4 lg:pt-8 flex gap-4 items-center justify-center lg:justify-start">
                          <Button className="bg-[#F55266] hover:bg-[#F2223B] flex gap-1 items-center justify-center font-normal dark:text-white">
                            {t("shopNow")}{" "}
                            <span>
                              <ArrowUpRight
                                className="h-5 w-5"
                                strokeWidth={1}
                              />
                            </span>
                          </Button>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Image
                        className="lg:w-[450px] lg:h-[450px]"
                        src={hero.img}
                        alt=""
                        width={300}
                        height={300}
                      />
                    </div>
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
