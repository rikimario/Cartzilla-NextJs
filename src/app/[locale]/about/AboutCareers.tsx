import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutCareers() {
  const t = useTranslations("About");
  return (
    <div className=" overflow-hidden">
      <div className="pt-8 w-full">
        <p className="pt-4 text-gray-600 dark:text-gray-300">
          {t("careers.paragraph")}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white py-4">
          {t("careers.title")}
        </h1>
      </div>
      <div className="pb-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative py-4"
        >
          <CarouselContent>
            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#2F6ED5] w-1/4 md:w-1/5">
                      <p className="text-xs">Full time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      {t("careers.card1")}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("careers.place1")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#33B36B] w-1/4 md:w-1/5">
                      <p className="text-xs">Part time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      {t("careers.card2")}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("careers.place3")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#2F6ED5] w-1/4 md:w-1/5">
                      <p className="text-xs">Full time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      {t("careers.card3")}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("careers.place2")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#FC9231] w-1/4 md:w-1/5">
                      <p className="text-xs">Freelance</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      {t("careers.card4")}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("careers.place3")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#2F6ED5] w-1/4 md:w-1/5">
                      <p className="text-xs">Full time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white pr-8">
                      {t("careers.card5")}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("careers.place4")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute text-gray-900 dark:text-white bottom-4 left-1/2">
            <CarouselPrevious className="dark:bg-[#181D25]" />
            <CarouselNext className="dark:bg-[#181D25]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
