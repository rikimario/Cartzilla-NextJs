import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

export default function ThankYou({
  address,
  city,
  postCode,
  displayedDeliveryInfo,
  paymentMethod,
  comment,
}: {
  address: string;
  city: string;
  postCode: string;
  displayedDeliveryInfo: string;
  paymentMethod: string;
  comment: string;
}) {
  return (
    <div className="flex items-center justify-between gap-16">
      <div className="w-1/2">
        <div className="flex items-center gap-4 my-8">
          <span className="flex items-center justify-center p-4 text-lg bg-green-500 font-medium text-white rounded-full">
            <Check className="w-8 h-8" />
          </span>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-gray-500">
                Order #{Math.floor(Math.random() * 1000000)}
              </p>
              <h2 className="text-3xl font-medium">
                Thank you for your order!
              </h2>
            </div>
            <button className="text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-gray-600 font-medium underline underline-offset-4 hover:no-underline cursor-pointer">
              Track order
            </button>
          </div>
        </div>
        <div className="space-y-4 border-t border-gray-200 pt-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Delivery</h2>
            <p className="text-gray-500">{`${address}, ${city} ${postCode}`}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Time</h2>
            <p className="text-gray-500">{displayedDeliveryInfo}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Payment</h2>
            <p className="text-gray-500">
              {/\d/.test(paymentMethod)
                ? `Card: **** **** **** ${paymentMethod.slice(-4)}`
                : paymentMethod}
            </p>
          </div>
          {comment === "" ? null : (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Comment</h2>
              <p className="text-gray-500">{comment}</p>
            </div>
          )}
        </div>
      </div>

      <div className="w-1/2 bg-emerald-100 text-center space-y-3 px-6 py-24 rounded-lg">
        <h2 className="text-2xl font-semibold">
          🎉 Congratulations! 30% off your new purchase!
        </h2>
        <p className="text-gray-500">
          Use your cupon now or look for it in your personal account.
        </p>

        <div className="flex items-center justify-between px-16 py-4 gap-4">
          <input
            type="text"
            className="w-full p-2 text-gray-500 bg-white border border-gray-300 rounded-xl"
            value="30%SALLOFF"
            readOnly={true}
          />
          <Button className="dark:text-gray-200 dark:hover:text-white font-medium">
            Copy cupon
          </Button>
        </div>
      </div>
    </div>
  );
}
