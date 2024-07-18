import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export default function AboutCareers() {
  return (
    <div className="px-4 overflow-hidden">
      <div className="pt-8 w-full">
        <p className="pt-4 text-gray-600 dark:text-gray-300">Careers</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white py-4">
          Open positions
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
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#2F6ED5] w-1/5">
                      <p className="text-xs">Full time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      Supply Chain and Logistics Coordinator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      New York
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#33B36B] w-1/5">
                      <p className="text-xs">Part time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      Content Manager for Social Networks
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      Remote
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#2F6ED5] w-1/5">
                      <p className="text-xs">Full time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      Customer Service Representative
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      London
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#FC9231] w-1/5">
                      <p className="text-xs">Freelance</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                      Data Analyst/Analytics Specialist
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      Remote
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="pb-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex p-1 m-2 items-center justify-center rounded-2xl text-white bg-[#2F6ED5] w-1/5">
                      <p className="text-xs">Full time</p>
                    </div>
                    <h1 className="text-xl p-2 font-semibold text-gray-900 dark:text-white pr-8">
                      E-commerce Manager/Director
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      In house
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
