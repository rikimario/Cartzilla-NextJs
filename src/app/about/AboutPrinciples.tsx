import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

export default function AboutPrinciples() {
  return (
    <div className="md:flex md:gap-8 md:px-10 xl:px-20 md:py-6">
      <div className="px-4 md:px-0 md:w-2/3 md:h-1/2">
        <Image
          className="rounded-xl h-full w-full object-cover"
          src="/delivery.jpg"
          alt="delivery"
          width={600}
          height={600}
        />
      </div>

      <div className="px-4 md:px-0 pt-8 w-full">
        <p className="px-4 pt-4 text-gray-600 dark:text-gray-300">Principles</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white p-4">
          The main principles that will allow us to grow
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 px-4">
          Cartzilla is a comprehensive solution to fulfill any customer's needs,
          serving as both the starting point and end destination of their
          search. It operates as a reliable assistant, dedicated to eliminating
          the need for any unpleasant compromises, making their dreams a
          reality, and empowering them to think big.
        </p>

        <div className="px-4 py-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                Customer focus
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We prioritize understanding and anticipating our customers'
                needs, delivering an exceptional and personalized experience
                from start to finish.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-semibold">
                Betting on reputation
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We value a solid reputation built on integrity, transparency,
                and quality - ensuring our customers trust and rely on our
                brand.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-semibold">
                Fast, convenient and enjoyable
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We've streamlined our process for speed, convenience, and an
                enjoyable shopping experience, redefining online standards for
                our delighted customers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
