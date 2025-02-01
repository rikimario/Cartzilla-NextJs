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
    <div className="w-1/2">
      {currentStep !== 3 && (
        <div className="flex items-center gap-6 my-8">
          <span className="flex items-center justify-center w-6 h-6 p-4 text-lg bg-gray-300 font-medium text-white rounded-full">
            3
          </span>
          <h2 className="text-2xl font-medium">Payment</h2>
        </div>
      )}

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
