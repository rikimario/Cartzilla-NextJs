"use client";

import React, { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Address from "./Address";
import Payment from "./Payment";

export default function OrderLeftBlock() {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryInfo, setDeliveryInfo] = useState("");
  const [displayedDeliveryInfo, setDisplayedDeliveryInfo] = useState("");
  const [address, setAddress] = useState("");
  const [displayedAddress, setDisplayedAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [displayedPaymentMethod, setDisplayedPaymentMethod] = useState("");
  const [isNextStepDisabled, setIsNextStepDisabled] = useState(true);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setDisplayedDeliveryInfo(deliveryInfo);
    setDisplayedAddress(address);
    setDisplayedPaymentMethod(paymentMethod);
  };

  return (
    <div>
      <DeliveryInfo
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        deliveryInfo={deliveryInfo}
        setDeliveryInfo={setDeliveryInfo}
        displayedDeliveryInfo={displayedDeliveryInfo}
        setIsNextStepDisabled={setIsNextStepDisabled}
        isNextStepDisabled={isNextStepDisabled}
      />

      <Address
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        address={address}
        setAddress={setAddress}
        displayedAddress={displayedAddress}
        setIsNextStepDisabled={setIsNextStepDisabled}
        isNextStepDisabled={isNextStepDisabled}
      />

      <Payment
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        displayedPaymentMethod={displayedPaymentMethod}
        setIsNextStepDisabled={setIsNextStepDisabled}
        isNextStepDisabled={isNextStepDisabled}
      />
    </div>
  );
}
