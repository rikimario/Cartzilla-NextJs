import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="px-4 pt-8">
        <Image
          className="w-full h-full rounded-xl"
          src="/about-hero-img.jpg"
          alt="about-hero-img"
          width={200}
          height={200}
        />
      </div>

      <div className="px-4 py-8">
        <div className="bg-gradient-to-r from-[#E7F0FD] to-[#ACCBEE] dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632] rounded-xl px-6 py-12">
          <h1 className="text-3xl text-gray-900 font-semibold">
            Cartzilla - More than a retailer
          </h1>
          <p className="text-gray-600 pt-6 text-sm font-medium">
            Since 2015, we have been fulfilling the small dreams and big plans
            of millions of people. You can find literally everything here.
          </p>
          <div className="pt-6">
            <Link href="#mission">
              <Button
                className="bg-inherit border-gray-900 flex gap-1 hover:bg-gray-900 hover:text-white"
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
  );
}
