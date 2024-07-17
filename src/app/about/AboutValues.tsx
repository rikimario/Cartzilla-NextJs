import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Leaf,
  Rocket,
  ShoppingBag,
  Star,
  TrendingUp,
  UserRoundPlus,
} from "lucide-react";
import React from "react";

export default function AboutValues() {
  return (
    <div className="md:flex md:px-10 xl:px-20 overflow-hidden">
      <div className="px-4 md:px-0 pt-8 w-full">
        <p className="px-4 pt-4 text-gray-600 dark:text-gray-300">Values</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white p-4">
          Simple values to achieve goals
        </h1>
      </div>
      <div className="pb-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative p-4 md:w-[21rem] lg:w-[35rem] xl:w-[53rem] 2xl:w-[65rem]"
        >
          <CarouselContent>
            <CarouselItem className="py-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex gap-4 p-2 items-center">
                      <UserRoundPlus
                        className="h-6 w-6 dark:text-white"
                        strokeWidth={1}
                      />
                      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        People
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      The most important value of the Company is people
                      (employees, partners, clients). Behind any success there
                      is, first and foremost, a specific person. It is he who
                      creates the product, technology, and innovation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex gap-4 p-2 items-center">
                      <ShoppingBag
                        className="h-6 w-6 dark:text-white"
                        strokeWidth={1}
                      />
                      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Service
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      Care, attention, desire and ability to be helpful (to a
                      colleague in his department, other departments, clients,
                      customers and all other people who surround us).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex gap-4 p-2 items-center">
                      <TrendingUp
                        className="h-6 w-6 dark:text-white"
                        strokeWidth={1}
                      />
                      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Responsibility
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      Responsibility is our key quality. We don't shift it to
                      external circumstances or other people. If we see
                      something that could be improved, we don't just criticize,
                      but offer our own options.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex gap-4 p-2 items-center">
                      <Rocket
                        className="h-6 w-6 dark:text-white"
                        strokeWidth={1}
                      />
                      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Innovation
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      We foster a culture of continuous improvement and
                      innovation. Embracing change and staying ahead of the
                      curve are essential for our success. We encourage creative
                      thinking, experimentation, and the pursuit of new ideas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex gap-4 p-2 items-center">
                      <Star
                        className="h-6 w-6 dark:text-white"
                        strokeWidth={1}
                      />
                      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Leadership
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      Cartzilla people are young, ambitious and energetic
                      individuals. With identified leadership qualities, with a
                      desire to be the best at what they do.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-6 max-w-96">
              <Card className="min-h-full dark:bg-[#181D25]">
                <CardContent>
                  <div className="py-6">
                    <div className="flex gap-4 p-2 items-center">
                      <Leaf
                        className="h-6 w-6 dark:text-white"
                        strokeWidth={1}
                      />
                      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Sustainability
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      We are committed to minimizing our environmental impact
                      and promoting sustainable practices. From responsible
                      sourcing to eco-friendly packaging, we aim to make a
                      positive contribution to the well-being of our planet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          {/* <div className="absolute top-2 right-16 md:left-[-20px] md:bottom-[-120px]"> */}
          <div className="absolute text-gray-900 dark:text-white bottom-4 left-1/2 md:left-1/3 lg:1/2">
            <CarouselPrevious className="dark:bg-[#181D25]" />
            <CarouselNext className="dark:bg-[#181D25]" />
          </div>
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
}
