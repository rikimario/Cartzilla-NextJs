"use client";

import React, { useEffect, useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Address from "./Address";
import Payment from "./Payment";
import { Product } from "@/lib/types";
import { createClient } from "../../../../utils/supabase/client";
import ThankYou from "./ThankYou";
import FinalOrderSummary from "./FinalOrderSummary";
import { getUser } from "../../../../utils/supabase/actions";

export default function Order() {
  const [product, setProduct] = useState<Product[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryInfo, setDeliveryInfo] = useState("");
  const [displayedDeliveryInfo, setDisplayedDeliveryInfo] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isNextStepDisabled, setIsNextStepDisabled] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [orderId, setOrderId] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setDisplayedDeliveryInfo(deliveryInfo);
  };

  useEffect(() => {
    setOrderId(Math.floor(Math.random() * 10000000));
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const supabase = await createClient();

        const { data: product, error } = await supabase
          .from("cart")
          .select("*");

        if (error) throw error;

        setProduct(product);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchProduct();
  }, []);

  const totalQuantity = product.reduce(
    (acc, current) => acc + (current.quantity || 0),
    0
  );

  const getTotal = () => {
    return product.reduce((total, currentProduct) => {
      return total + currentProduct.price * currentProduct.quantity;
    }, 0);
  };

  const handleCheckout = async () => {
    const user = await getUser();
    const supabase = await createClient();

    if (!user) {
      console.log("User is not logged in");
      return;
    }

    const orderData = {
      user_id: user.id,
      products: JSON.stringify(
        product.map((item) => ({
          product_id: item.product_id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          size: item.size,
          quantity: item.quantity,
        }))
      ),
      order_id: orderId,
      delivery_date: deliveryInfo,
      address: address,
      city: city,
      quantity: totalQuantity,
      payment_method: paymentMethod,
      order_total: getTotal(),
      created_at: new Date(),
    };

    const { error } = await supabase.from("orders").insert([orderData]);

    handleNextStep();

    if (error) {
      console.log(error);

      throw new Error("Failed");
    }

    const handleRemove = async () => {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("User not authenticated");
      }

      try {
        const { error } = await supabase
          .from("cart")
          .delete()
          .eq("user_id", user?.id);

        if (error && error.code !== "PGRST116") throw error;

        const { data: updatedFavorites, error: fetchError } = await supabase
          .from("cart")
          .select("*");

        if (fetchError) throw fetchError;

        setProduct(updatedFavorites);
      } catch (error) {
        console.log(error);
      }
    };
    handleRemove();
  };

  return (
    <>
      {currentStep > 3 ? (
        <ThankYou
          address={address}
          city={city}
          postCode={postCode}
          displayedDeliveryInfo={displayedDeliveryInfo}
          paymentMethod={paymentMethod}
          comment={comment}
          orderId={orderId}
        />
      ) : (
        <div className="lg:flex lg:justify-between lg:px-0 px-6">
          <div className="lg:w-1/2">
            <DeliveryInfo
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              handleNextStep={handleNextStep}
              setDeliveryInfo={setDeliveryInfo}
              displayedDeliveryInfo={displayedDeliveryInfo}
              setIsNextStepDisabled={setIsNextStepDisabled}
              isNextStepDisabled={isNextStepDisabled}
            />

            <Address
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              handleNextStep={handleNextStep}
              address={address}
              setAddress={setAddress}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              postCode={postCode}
              setPostCode={setPostCode}
              city={city}
              setCity={setCity}
              setIsNextStepDisabled={setIsNextStepDisabled}
              isNextStepDisabled={isNextStepDisabled}
            />

            <Payment
              handleCheckout={handleCheckout}
              total={getTotal}
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              setIsNextStepDisabled={setIsNextStepDisabled}
              isNextStepDisabled={isNextStepDisabled}
              comment={comment}
              setComment={setComment}
            />
          </div>
          <FinalOrderSummary
            product={product}
            total={getTotal}
            totalQuantity={totalQuantity}
          />
        </div>
      )}
    </>
  );
}
