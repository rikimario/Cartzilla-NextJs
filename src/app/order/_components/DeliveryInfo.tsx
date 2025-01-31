"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function DeliveryInfo({
  currentStep,
  setCurrentStep,
  handleNextStep,
  setDeliveryInfo,
  displayedDeliveryInfo,
  setIsNextStepDisabled,
  isNextStepDisabled,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleNextStep: () => void;
  displayedDeliveryInfo: string;
  setDeliveryInfo: (deliveryInfo: string) => void;
  setIsNextStepDisabled: (isNextStepDisabled: boolean) => void;
  isNextStepDisabled: boolean;
}) {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const handleDeliveryInfoChange = (time: string) => {
    setDeliveryInfo(time);
    setIsNextStepDisabled(false);
    setSelectedTime(time);
  };

  const currentDate = new Date();

  const deliveryOptions = Array.from({ length: 7 }, (_, index) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + index + 1);

    const dayOfWeek = nextDate.toLocaleString("en-US", { weekday: "long" });
    const dayOfMonth = nextDate.getDate();
    let times;
    switch (index) {
      case 0:
        times = ["9:00 - 12:00", "13:00 - 16:00"];
        break;
      case 1:
        times = ["10:00 - 13:00", "14:00 - 17:00"];
        break;
      case 2:
        times = ["11:00 - 14:00", "15:00 - 18:00"];
        break;
      case 3:
        times = ["9:00 - 12:00", "13:00 - 16:00"];
        break;
      case 4:
        times = ["10:00 - 13:00", "14:00 - 17:00"];
        break;
      case 5:
        times = ["11:00 - 14:00", "15:00 - 18:00"];
        break;
      case 6:
        times = ["9:00 - 12:00", "13:00 - 16:00"];
        break;
      default:
        times = ["12:00 - 15:00", "17:00 - 20:00"];
    }

    return {
      date: `${dayOfWeek}, ${dayOfMonth}`,
      times,
    };
  });
  return (
    <>
      {currentStep === 1 && (
        <div className="w-1/2">
          <div className="flex items-center gap-6 my-8">
            <span className="flex items-center justify-center w-6 h-6 p-4 text-lg bg-red-500 font-medium text-white rounded-full">
              1
            </span>
            <h2 className="text-2xl font-medium">Delivery Information</h2>
          </div>
          <p className="text-gray-700 font-semibold text-lg ml-14 mb-5">
            Choose shipping day and time
          </p>
          <div className="border-t border-gray-200 pt-8">
            <div className="flex">
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: false,
                }}
              >
                <CarouselContent>
                  {deliveryOptions.map((option, index) => (
                    <div className="space-x-6" key={index}>
                      <h3 className="text-lg text-center">{option.date}</h3>
                      <div className="flex flex-col gap-1 items-start">
                        {option.times.map((time, timeIndex) => (
                          <Button
                            className={`my-1 rounded-full text-gray-700 ${
                              selectedTime === `${option.date} | ${time}`
                                ? "border-gray-950"
                                : ""
                            }`}
                            variant="outline"
                            key={timeIndex}
                            onClick={() =>
                              handleDeliveryInfoChange(
                                `${option.date} | ${time}`
                              )
                            }
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="mt-8">
              <Button
                className="w-full flex items-center gap-1 bg-[#F55266] hover:bg-[#F2223B] text-lg"
                type="button"
                onClick={handleNextStep}
                disabled={isNextStepDisabled}
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentStep > 1 && (
        <div className="w-1/2">
          <div className="flex items-center gap-6 my-8">
            <span className="flex items-center justify-center p-2 text-lg bg-gray-300 font-medium text-white rounded-full">
              <Check className="w-4 h-4" />
            </span>
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-medium">Delivery Information</h2>
              <button
                onClick={() => setCurrentStep(1)}
                className="text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-gray-600 font-medium underline underline-offset-4 hover:no-underline cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
          <p className="text-gray-700 font-semibold text-lg ml-14 mb-3">
            Estimated delivery date
          </p>
          <p className="text-gray-500 ml-14 mb-5">{displayedDeliveryInfo}</p>
        </div>
      )}
    </>
  );
}
