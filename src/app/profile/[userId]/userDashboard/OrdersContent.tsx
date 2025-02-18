"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import { Orders } from "@/lib/types";
import OrderProductsSheet from "../../_components/OrderProductsSheet";

export default function OrdersContent() {
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const supabase = await createClient();

      const { data: ordersData, error } = await supabase
        .from("orders")
        .select("*");

      console.log("Raw order data:", ordersData);

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

  return (
    <div className="p-2 md:p-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-8 pb-2 dark:text-white">
        Orders
      </h1>
      <div className="flex text-gray-500 pb-4 border-b border-gray-200 dark:border-gray-600">
        <span className="xl:w-52 w-44">Order #</span>
        <span className="hidden md:block xl:w-52 w-44">Order date</span>
        <span className="hidden md:block xl:w-52 w-44">Total</span>
      </div>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
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
    </div>
  );
}
