import { Product } from "@/app/utils/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface ShippingOptionsProps {
  product: Product;
}

export default function ShippingOptions({ product }: ShippingOptionsProps) {
  return (
    <div className="mt-6">
      <Accordion type="single" collapsible className="w-full">
        {/* Shipping */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base font-semibold">
            Shipping options
          </AccordionTrigger>
          <div className="flex justify-between">
            <AccordionContent className="text-gray-600 dark:text-gray-300">
              <div className="flex flex-col gap-5">
                <p className="">Pickup from the store</p>
                <p className="">Pickup from postal offices</p>
                <p className="">Delivery by courier</p>
              </div>
            </AccordionContent>
            <AccordionContent className="text-gray-600 dark:text-gray-300">
              <div className="flex flex-col gap-5">
                <p>Today</p>
                <p>Tomorrow</p>
                <p>2-3 days</p>
              </div>
            </AccordionContent>
            <AccordionContent className="text-gray-600 dark:text-gray-300">
              <div className="text-end flex flex-col gap-5">
                <p className="text-gray-900 font-semibold">Free</p>
                <p className="text-gray-900 font-semibold">$5.00</p>
                <p className="text-gray-900 font-semibold">$10.00</p>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        {/* Warranty */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base font-semibold">
            Warranty information
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            <p className="text-gray-600 font-semibold">
              {product.warrantyInformation}
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* Return */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base font-semibold">
            Return policy
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            <p className="text-gray-600 font-semibold">
              {product.returnPolicy}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
