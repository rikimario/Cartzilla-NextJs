"use client";

import React, { useEffect, useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Address from "./Address";
import Payment from "./Payment";
import { Product } from "@/lib/types";
import { createClient } from "../../../../utils/supabase/client";
import ThankYou from "./ThankYou";

export default function OrderLeftBlock() {
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

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setDisplayedDeliveryInfo(deliveryInfo);
  };

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

  const getTotal = () => {
    return product.reduce((total, currentProduct) => {
      return total + currentProduct.price * currentProduct.quantity;
    }, 0);
  };

  return (
    <div>
      {currentStep > 3 ? (
        <ThankYou
          address={address}
          city={city}
          postCode={postCode}
          displayedDeliveryInfo={displayedDeliveryInfo}
          paymentMethod={paymentMethod}
          comment={comment}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
