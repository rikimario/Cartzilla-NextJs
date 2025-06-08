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
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutValues() {
  const t = useTranslations("About");
  return (
    <div className="md:flex overflow-hidden">
      <div className="px-4 md:px-0 pt-8 w-full">
        <p className="px-4 pt-4 text-gray-600 dark:text-gray-300">
          {t("values.paragraph")}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white p-4">
          {t("values.title")}
        </h1>
      </div>
      <div className="pb-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative p-4 md:w-[21rem] lg:w-[35rem] xl:w-[53rem] 2xl:w-[63rem]"
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
                        {t("values.people")}
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("values.peopleDescription")}
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
                        {t("values.service")}
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("values.serviceDescription")}
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
                        {t("values.responsibility")}
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("values.responsibilityDescription")}
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
                        {t("values.innovation")}
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("values.innovationDescription")}
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
                        {t("values.leadership")}
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("values.leadershipDescription")}
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
                        {t("values.sustainability")}
                      </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 p-2">
                      {t("values.sustainabilityDescription")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute text-gray-900 dark:text-white bottom-4 left-1/2 md:left-1/3 lg:1/2">
            <CarouselPrevious className="dark:bg-[#181D25]" />
            <CarouselNext className="dark:bg-[#181D25]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
