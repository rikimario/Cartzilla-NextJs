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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setDisplayedDeliveryInfo(deliveryInfo);
    // setDisplayedAddress(address);
    setDisplayedPaymentMethod(paymentMethod);
  };

  return (
    <div>
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
