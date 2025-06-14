import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function OrderSummary({ product }: { product: Product[] }) {
  const t = useTranslations("Cart");
  const totalQuantity = product.reduce(
    (acc, current) => acc + (current.quantity || 0),
    0
  );
  const getTotal = () => {
    return product.reduce((total, currentProduct) => {
      return total + currentProduct.price * currentProduct.quantity;
    }, 0);
  };
  return (
    <div className="lg:w-1/3 mt-6 lg:mt-0 max-h-[26rem] bg-gray-100 rounded-lg p-4 md:p-8 dark:bg-[#222934]">
      <h1 className="text-2xl font-semibold text-gray-900 mb-10 dark:text-white">
        {t("orderSummary")}
      </h1>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 border-t dark:border-gray-500 py-6">
        <p>
          {t("subTotal")} ({totalQuantity} {t("items")}):
        </p>
        <p className="text-gray-900 font-medium dark:text-white">
          ${getTotal().toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 border-b dark:border-gray-500 pb-6">
        <p>{t("shipping")}:</p>
        <p className="text-gray-900 font-medium dark:text-white">
          {t("calculateAtCheckout")}
        </p>
      </div>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 py-6">
        <p>{t("estimatedTotal")}:</p>
        <p className="text-gray-900 text-2xl font-semibold dark:text-white">
          ${getTotal().toFixed(2)}
        </p>
      </div>

      <Link href={"/order"}>
        <Button className="flex items-center w-full justify-center text-lg dark:text-white gap-2 h-[62px] rounded-lg bg-[#F55266] hover:bg-[#F2223B]">
          {t("checkout")}{" "}
          <span>
            <ChevronRight className="h-5 w-5" />
          </span>
        </Button>
      </Link>
    </div>
  );
}
