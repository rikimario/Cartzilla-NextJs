"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { createClient } from "../../../../../utils/supabase/client";
import { Orders } from "@/lib/types";
import OrderProductsSheet from "../../_components/OrderProductsSheet";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 4;

export default function OrdersContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const supabase = await createClient();
      const { data: ordersData, error } = await supabase
        .from("orders")
        .select("*");

      if (error) throw error;

      const formattedOrders = ordersData.map((order) => ({
        ...order,
        products:
          typeof order.products === "string"
            ? JSON.parse(order.products) || []
            : order.products || [],
      }));

      setOrders(formattedOrders.reverse() ?? []);
    };
    fetchOrders();
  }, []);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const paginatedOrders = orders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-2">
      <h1 className="text-4xl font-bold text-gray-700 mb-8 pb-2 dark:text-white">
        Orders
      </h1>
      <div className="flex text-gray-500 pb-4 border-b border-gray-200 dark:border-gray-600">
        <span className="xl:w-52 w-44">Order #</span>
        <span className="hidden md:block xl:w-52 w-44">Order date</span>
        <span className="hidden md:block xl:w-52 w-44">Total</span>
      </div>
      {paginatedOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        paginatedOrders.map((order, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-600"
          >
            <div className="w-1/3 md:w-full md:flex space-y-4 md:space-y-0">
              <h3 className="xl:w-52 w-44">{order.order_id}</h3>
              <p className="text-gray-500 xl:w-52 w-44">
                {new Date(order.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p>${(order.order_total + 16.5).toFixed(2)}</p>
            </div>
            <OrderProductsSheet order={order} />
          </div>
        ))
      )}
      {totalPages > 1 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                isActive={currentPage !== 1}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                isActive={currentPage !== totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
