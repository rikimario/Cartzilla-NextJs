import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FooterAccordion() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Company</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            About company
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Our team
          </AccordionContent>
          <AccordionContent className="text-gray-300">Careers</AccordionContent>
          <AccordionContent className="text-gray-300">
            Contact us
          </AccordionContent>
          <AccordionContent className="text-gray-300">News</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Account</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Your account
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Shipping rates & policies
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Refunds & replacements
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Delivery info
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Order tracking
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Taxes & fees
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Customer service</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Payment methods
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Money back guarantee
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Product returns
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Support center
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Shipping
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            Terms & conditions
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
