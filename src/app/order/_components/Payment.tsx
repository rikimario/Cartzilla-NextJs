import React from "react";

export default function Payment({
  currentStep,
  handleNextStep,
  paymentMethod,
  setPaymentMethod,
  displayedPaymentMethod,
  setIsNextStepDisabled,
  isNextStepDisabled,
}: {
  currentStep: number;
  handleNextStep: () => void;
  paymentMethod: string;
  setPaymentMethod: (deliveryInfo: string) => void;
  displayedPaymentMethod: string;
  setIsNextStepDisabled: (isNextStepDisabled: boolean) => void;
  isNextStepDisabled: boolean;
}) {
  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
    if (event.target.value !== "") {
      setIsNextStepDisabled(false);
    }
  };
  return (
    <div>
      <h2>Payment</h2>
      {currentStep === 3 && (
        <div>
          <input
            type="text"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            placeholder="Enter payment method"
          />

          <button
            type="button"
            onClick={handleNextStep}
            disabled={isNextStepDisabled}
          >
            Continue
          </button>
        </div>
      )}

      {currentStep > 3 && (
        <div>
          <p>{displayedPaymentMethod}</p>
        </div>
      )}
    </div>
  );
}
