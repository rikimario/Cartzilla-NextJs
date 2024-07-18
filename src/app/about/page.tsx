import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutMission from "./AboutMission";
import AboutPrinciples from "./AboutPrinciples";
import AboutValues from "./AboutValues";
import Philanthropy from "./Philanthropy";
import AboutCareers from "./AboutCareers";

export default function About() {
  return (
    <div className="md:px-10 xl:px-[6.5rem] dark:bg-[#181D25]">
      <div className="md:flex md:flex-row-reverse p-4 md:gap-8">
        {/* <div className="px-4 pt-8 md:px-0"> */}
        <div className="py-8 w-full md:w-1/2 md:py-0 md:px-0">
          <Image
            className="rounded-xl h-full w-full object-cover"
            src="/about-hero-img.jpg"
            alt="about-hero-img"
            width={600}
            height={600}
          />
        </div>

        <div className="md:px-0 w-full md:w-1/2">
          <div className="bg-gradient-to-r from-[#E7F0FD] to-[#ACCBEE] dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632] rounded-xl px-6 lg:px-10 xl:px-20 gap-6 py-12 h-full flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-white font-semibold">
              Cartzilla - More than a retailer
            </h1>
            <p className="text-gray-600 dark:text-gray-300 pt-6 text-sm lg:text-base font-medium">
              Since 2015, we have been fulfilling the small dreams and big plans
              of millions of people. You can find literally everything here.
            </p>
            <div className="pt-6">
              <Link href="#mission">
                <Button
                  className="bg-inherit border-gray-900 dark:border-white flex gap-1 hover:bg-gray-900 hover:text-white"
                  variant="outline"
                  size="lg"
                >
                  Learn more
                  <span>
                    <ArrowDown className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 px-4 xl:px-36 pt-8 gap-2">
        <div className="text-center p-2">
          <h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white font-bold">
            14K
          </h1>
          <p className="text-gray-600 dark:text-gray-300 pt-2 text-sm font-medium">
            products available for purchase
          </p>
        </div>
        <div className="text-center p-2">
          <h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white font-bold">
            12M
          </h1>
          <p className="text-gray-600 dark:text-gray-300 pt-2 text-sm font-medium">
            users visited our site from 2015
          </p>
        </div>
        <div className="text-center p-2">
          <h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white font-bold">
            80+
          </h1>
          <p className="text-gray-600 dark:text-gray-300 pt-2 text-sm font-medium">
            employees around the world
          </p>
        </div>
        <div className="text-center p-2">
          <h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white font-bold">
            92%
          </h1>
          <p className="text-gray-600 dark:text-gray-300 pt-2 text-sm font-medium">
            of our customers return
          </p>
        </div>
      </div>

      <AboutMission />
      <AboutPrinciples />
      <AboutValues />
      <Philanthropy />
      <AboutCareers />
    </div>
  );
}
