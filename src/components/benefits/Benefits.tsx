import { CreditCard, MessageCircle, RefreshCcw, Truck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Home");
  return (
    <div className="py-4 lg:py-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-2 items-center justify-center text-center">
      <div className="flex flex-col lg:flex-row gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <Truck className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 dark:text-white font-semibold">
            {t("freeShipping")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("freeShippingDescription")}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <CreditCard className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 font-semibold dark:text-white">
            {t("securePayment")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("securePaymentDescription")}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <RefreshCcw className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 font-semibold dark:text-white">
            {t("moneyBackGuarantee")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("moneyBackGuaranteeDescription")}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-2 items-center lg:justify-center">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-gray-800">
          <MessageCircle className="h-6 w-6 dark:text-white" />
        </div>
        <div className="lg:flex-col">
          <p className="text-gray-900 font-semibold dark:text-white">
            {t("24/7CustomerSupport")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("24/7CustomerSupportDescription")}
          </p>
        </div>
      </div>
    </div>
  );
}
