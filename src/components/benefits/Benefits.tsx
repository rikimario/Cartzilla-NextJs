import { CreditCard, MessageCircle, RefreshCcw, Truck } from "lucide-react";

export default function Benefits() {
  return (
    <div className="py-4 lg:py-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-2 items-center justify-center text-center">
      <div className="flex flex-col lg:flex-row gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <Truck className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 dark:text-white font-semibold">
            Free Shipping & Returns
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For all orders over 199.00$
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <CreditCard className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 font-semibold dark:text-white">
            Secure Payment Method
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            We ensure secure payment
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <RefreshCcw className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 font-semibold dark:text-white">
            Money Back Guarantee
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            30 day money back guarantee
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <MessageCircle className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 font-semibold dark:text-white">
            24/7 Customer Support
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Friendly customer support
          </p>
        </div>
      </div>
    </div>
  );
}
