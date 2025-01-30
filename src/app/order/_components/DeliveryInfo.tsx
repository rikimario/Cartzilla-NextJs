import React from "react";

export default function DeliveryInfo({
  currentStep,
  handleNextStep,
  deliveryInfo,
  setDeliveryInfo,
  displayedDeliveryInfo,
  setIsNextStepDisabled,
  isNextStepDisabled,
}: {
  currentStep: number;
  handleNextStep: () => void;
  deliveryInfo: string;
  displayedDeliveryInfo: string;
  setDeliveryInfo: (deliveryInfo: string) => void;
  setIsNextStepDisabled: (isNextStepDisabled: boolean) => void;
  isNextStepDisabled: boolean;
}) {
  const handleDeliveryInfoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryInfo(event.target.value);
    if (event.target.value !== "") {
      setIsNextStepDisabled(false);
    }
  };
  return (
    <div>
      <h2>Delivery Information</h2>
      {currentStep === 1 && (
        <div>
          <input
            type="text"
            value={deliveryInfo}
            onChange={handleDeliveryInfoChange}
            placeholder="Enter delivery information"
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

      {currentStep > 1 && (
        <div>
          <p>{displayedDeliveryInfo}</p>
        </div>
      )}
    </div>
  );
}
