import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ThankYou({
  address,
  city,
  postCode,
  displayedDeliveryInfo,
  paymentMethod,
  comment,
  orderId,
}: {
  address: string;
  city: string;
  postCode: string;
  displayedDeliveryInfo: string;
  paymentMethod: string;
  comment: string;
  orderId: number;
}) {
  const t = useTranslations("Order");
  return (
    <div className="lg:flex items-center justify-between gap-10 lg:gap-16 space-y-8 lg:space-y-0 px-2 lg:px-0">
      <div className="lg:w-1/2 px-4 md:px-0">
        <div className="flex items-center gap-4 my-8">
          <span className="flex items-center justify-center p-4 text-lg bg-green-500 font-medium text-white rounded-full">
            <Check className="w-8 h-8" />
          </span>
          <div className="md:flex items-center justify-between w-full space-y-4">
            <div>
              <p className="text-gray-500">
                {t("order")} #{orderId}
              </p>
              <h2 className="lg:text-3xl text-xl md:font-medium font-semibold">
                {t("thankYou")}
              </h2>
            </div>
            <button className="text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-gray-600 font-medium underline underline-offset-4 hover:no-underline cursor-pointer">
              {t("trackOrder")}
            </button>
          </div>
        </div>

        <div className="space-y-4 border-t border-gray-200 pt-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">{t("delivery")}</h2>
            <p className="text-gray-500 dark:text-gray-400">{`${address}, ${city} ${postCode}`}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">{t("time")}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {displayedDeliveryInfo}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">{t("payment")}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {/\d/.test(paymentMethod)
                ? `Card: **** **** **** ${paymentMethod.slice(-4)}`
                : paymentMethod}
            </p>
          </div>
          {comment === "" ? null : (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{t("comment")}</h2>
              <p className="text-gray-500 dark:text-gray-400">{comment}</p>
            </div>
          )}
        </div>
      </div>

      <div className="lg:w-1/2 bg-emerald-100 dark:bg-emerald-950 text-center space-y-3 px-6 py-24 rounded-lg">
        <h2 className="text-2xl font-semibold">🎉 {t("couponTitle")}</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {t("couponParagraph")}
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-between lg:px-16 py-4 gap-4">
          <input
            type="text"
            className="w-full p-2 text-gray-500 dark:text-gray-400 dark:bg-inherit bg-white border border-gray-300 rounded-xl"
            value="30%SELLOFF"
            readOnly={true}
          />
          <Button className="dark:text-gray-900 font-medium w-full">
            {t("couponBtn")}
          </Button>
        </div>
      </div>
    </div>
  );
}
