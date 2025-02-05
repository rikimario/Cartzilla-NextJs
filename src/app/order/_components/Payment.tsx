"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Payment({
  currentStep,
  handleNextStep,
  paymentMethod,
  setPaymentMethod,
  comment,
  setComment,
  setIsNextStepDisabled,
  isNextStepDisabled,
  total,
}: {
  currentStep: number;
  handleNextStep: () => void;
  paymentMethod: string;
  comment: string;
  setComment: (comment: string) => void;
  setPaymentMethod: (paymentMethod: string) => void;
  setIsNextStepDisabled: (isNextStepDisabled: boolean) => void;
  isNextStepDisabled: boolean;
  total: () => number;
}) {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  const cards = ["/visa.svg", "/mastercard-svgrepo.svg"];

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    let cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length > 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  return (
    <div>
      {currentStep !== 3 && (
        <div className="flex items-center gap-6 my-8">
          <span className="flex items-center justify-center w-6 h-6 p-4 text-lg bg-gray-300 font-medium text-white rounded-full">
            3
          </span>
          <h2 className="text-2xl font-medium">Payment</h2>
        </div>
      )}

      {currentStep === 3 && (
        <>
          <div className="flex items-center gap-6 my-8">
            <span className="flex items-center justify-center w-6 h-6 p-4 text-lg bg-red-500 font-medium text-white rounded-full">
              3
            </span>
            <h2 className="text-2xl font-medium">Payment</h2>
          </div>

          <div className="w-full pl-14 mb-5">
            <Accordion type="single" collapsible>
              <RadioGroup
                defaultValue={paymentMethod}
                onValueChange={(value) => {
                  setPaymentMethod(value);
                  if (value === "card") {
                    setPaymentMethod(cardNumber || "");
                    setIsNextStepDisabled(cardNumber.length < 16);
                  } else {
                    setPaymentMethod(value);
                    setIsNextStepDisabled(false);
                  }

                  if (!value) {
                    setIsNextStepDisabled(true);
                  }
                }}
                className={cn("gap-5")}
              >
                <AccordionItem value="Cash on delivery">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="Cash on delivery" id="r1" />
                      <Label className="font-semibold" htmlFor="r1">
                        Cash on delivery
                      </Label>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="card">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="card" id="r2" />
                      <Label className="font-semibold" htmlFor="r2">
                        Credit or debit card
                      </Label>
                      {cards.map((card, index) => (
                        <Image
                          className="hidden md:block"
                          key={index}
                          src={card}
                          alt="card"
                          width={30}
                          height={30}
                        />
                      ))}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 py-4 pl-4">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Card number"
                        value={cardNumber}
                        onChange={(e) => {
                          setCardNumber(formatCardNumber(e.target.value));
                          setPaymentMethod(e.target.value);
                          setIsNextStepDisabled(e.target.value.length < 19);
                        }}
                        maxLength={19}
                        className="h-14 text-lg text-gray-500"
                      />
                      <CreditCard className="absolute hidden md:block top-4 right-4 text-gray-400" />
                    </div>
                    <div className="md:flex gap-4 space-y-4 md:space-y-0">
                      <Input
                        type="text"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => {
                          setExpiryDate(formatExpiryDate(e.target.value));
                          setIsNextStepDisabled(e.target.value.length < 5);
                        }}
                        maxLength={5}
                        className="h-14 text-lg text-gray-500"
                      />
                      <Input
                        type="text"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) => {
                          setCvc(e.target.value.replace(/\D/g, "").slice(0, 3));
                          setIsNextStepDisabled(e.target.value.length < 3);
                        }}
                        maxLength={3}
                        className="h-14 text-lg text-gray-500"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="PayPal">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="PayPal" id="r3" />
                      <Label className="font-semibold" htmlFor="r3">
                        PayPal
                      </Label>
                      <Image
                        src="/paypal-svgrepo.svg"
                        alt="card"
                        width={20}
                        height={20}
                      />
                    </div>
                  </AccordionTrigger>
                </AccordionItem>

                <AccordionItem value="Google Pay">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="Google Pay" id="r4" />
                      <Label className="font-semibold" htmlFor="r4">
                        Google Pay
                      </Label>
                      <Image
                        src="/google-svgrepo.svg"
                        alt="card"
                        width={20}
                        height={20}
                      />
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </RadioGroup>
            </Accordion>

            <textarea
              className="my-6 text-lg w-full min-h-32 border border-gray-300 rounded-lg p-4"
              placeholder="Additional comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="mt-8 w-full">
            <Button
              className="w-full flex items-center gap-1 bg-[#F55266] hover:bg-[#F2223B] text-lg"
              type="button"
              onClick={handleNextStep}
              disabled={isNextStepDisabled || !paymentMethod}
            >
              Pay ${total() + 16.5}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
