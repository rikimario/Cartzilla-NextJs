"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import { Orders } from "@/lib/types";
import Image from "next/image";

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

      setOrders(formattedOrders ?? []);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">
              Order #{order.order_id} -{" "}
              {new Date(order.created_at).toLocaleDateString()}
            </h3>
            <p>
              <strong>Delivery Info:</strong> {order.delivery_date}
            </p>
            <p>
              <strong>Address:</strong> {order.address}, {order.city}
            </p>
            <p>
              <strong>Payment Method:</strong> {order.payment_method}
            </p>
            <p>{order.order_total}</p>

            <h4 className="mt-2 font-medium">Products:</h4>
            <ul className="ml-4 list-disc">
              {order.products.map((product, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={50}
                      height={50}
                      className="w-12 h-12 object-cover mr-2"
                    />
                    <div>
                      <p>{product.title}</p>
                      <p>${product.price}</p>
                      <p>Qty:{product.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
