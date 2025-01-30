import React from "react";

export default function Address({
  currentStep,
  handleNextStep,
  address,
  setAddress,
  displayedAddress,
  setIsNextStepDisabled,
  isNextStepDisabled,
}: {
  currentStep: number;
  handleNextStep: () => void;
  address: string;
  setAddress: (deliveryInfo: string) => void;
  displayedAddress: string;
  setIsNextStepDisabled: (isNextStepDisabled: boolean) => void;
  isNextStepDisabled: boolean;
}) {
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    if (event.target.value !== "") {
      setIsNextStepDisabled(false);
    }
  };
  return (
    <div>
      <h2>Address</h2>
      {currentStep === 2 && (
        <div>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
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

      {currentStep > 2 && (
        <div>
          <p>{displayedAddress}</p>
        </div>
      )}
    </div>
  );
}
