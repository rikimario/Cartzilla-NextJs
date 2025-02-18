import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Orders } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OrderProductsSheet({ order }: { order: Orders }) {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <ul className="ml-4 flex items-center cursor-pointer">
            {order.products.slice(0, 3).map((product, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="md:w-20 md:h-20 object-cover mr-2"
                  />
                </div>
              </li>
            ))}
            {order.products.length > 3 && (
              <p className="mr-2">
                <span className="text-gray-700 dark:text-gray-200 text-lg">
                  +{order.products.length - 3}
                </span>
              </p>
            )}
            <ChevronRight className="w-6 h-6" strokeWidth={1} />
          </ul>
        </SheetTrigger>
        <SheetContent className="dark:bg-[#181D25] dark:text-[white] xl:w-[400px]">
          <ScrollArea className="h-full py-4 pr-2">
            <SheetTitle className="text-xl">
              Order # {order.order_id}
            </SheetTitle>
            <div className="my-12">
              {order.products.map((product, index) => (
                <div className="flex" key={index}>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-32 h-32 object-cover mr-2"
                  />

                  <div className="flex flex-col justify-center">
                    <h2 className="">{product.title}</h2>
                    <p className="text-lg mt-2 font-semibold">
                      ${product.price}
                    </p>
                    <p className="text-sm mt-2">Qty: {product.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="mt-10 ml-6 py-10 border-y border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Delivery</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg text-gray-500">
                      Estimated delivery date:
                    </p>
                    <span className="text-lg">{order.delivery_date}</span>
                  </div>

                  <div>
                    <p className="text-lg text-gray-500">Shipping method:</p>
                    <span className="text-lg">Courier delivery</span>
                  </div>

                  <div>
                    <p className="text-lg text-gray-500">Shipping address:</p>
                    <span className="text-lg">{order.address}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4 pt-8">Payment</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg text-gray-500">Payment method:</p>
                    <span className="text-lg">
                      {/\d/.test(order.payment_method)
                        ? `Card: **** **** **** ${order.payment_method.slice(
                            -4
                          )}`
                        : order.payment_method}
                    </span>
                  </div>

                  <div>
                    <p className="text-lg text-gray-500">Shipping:</p>
                    <span className="text-lg">$16.50</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10 ml-6">
                <h3 className="text-lg text-gray-500">Estimated total:</h3>
                <span className="text-2xl font-semibold mr-6">
                  ${(order.order_total + 16.5).toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="absolute bottom-0 w-full text-lg text-gray-700 bg-gray-200"
            >
              Change the delivery time
            </Button>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
