import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Product } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FinalOrderSummary({
  product,
  total,
  totalQuantity,
}: {
  product: Product[];
  total: () => number;
  totalQuantity: number;
}) {
  const t = useTranslations("Order");
  return (
    <div className="lg:w-1/3 mt-6 lg:mt-0 max-h-[26rem] bg-gray-100 rounded-lg p-4 md:p-8 dark:bg-[#222934]">
      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 mb-10 dark:text-white">
          {t("orderSummary")}
        </h1>
        <Link
          href={"/cart"}
          className="text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-gray-600 font-medium underline underline-offset-4 hover:no-underline cursor-pointer"
        >
          {t("edit")}
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          {product.slice(0, 3).map((item, index) => (
            <div key={index}>
              <Link href={`/categories/${item.product_id}`}>
                <Image
                  className="w-20 h-20 object-cover"
                  width={150}
                  height={150}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </Link>
            </div>
          ))}
          {product.length > 3 && (
            <div className="hidden md:flex items-center justify-center text-xl h-20 w-20 ml-8 bg-gray-200 dark:bg-gray-600 rounded-lg">
              +{product.length - 3}
            </div>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <ChevronRight strokeWidth={1} className="cursor-pointer" />
          </SheetTrigger>
          <SheetDescription className="hidden"></SheetDescription>
          <SheetContent className="dark:bg-[#181D25] dark:text-[white]">
            <ScrollArea className="h-full py-4">
              <SheetTitle className="text-2xl font-semibold text-gray-900 mb-10 dark:text-white">
                {t("yourOrder")}
              </SheetTitle>
              {product.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center">
                    <Link href={`/categories/${item.product_id}`}>
                      <Image
                        className="max-w-32 max-h-32 object-cover"
                        width={150}
                        height={150}
                        src={item.thumbnail}
                        alt={item.title}
                      />
                    </Link>
                    <div className="ml-4 space-y-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-900 text-lg font-semibold dark:text-white">
                        ${item.price}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {t("quantity")}: {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/cart">
                <Button
                  variant="outline"
                  className="absolute bottom-0 w-full text-lg text-gray-500 bg-inherit"
                >
                  {t("editCart")}
                </Button>
              </Link>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 border-t dark:border-gray-500 py-6">
        <p>
          {t("subtotal")} ({totalQuantity} {t("items")}):
        </p>
        <p className="text-gray-900 font-medium dark:text-white">
          ${total().toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 border-b dark:border-gray-500 pb-6">
        <p>{t("shipping")}:</p>
        <p className="text-gray-900 font-medium dark:text-white">$16.50</p>
      </div>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 py-6">
        <p>{t("estimatedTotal")}:</p>
        <p className="text-gray-900 text-2xl font-semibold dark:text-white">
          ${(total() + 16.5).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
