import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, ChevronRight } from "lucide-react";

export default function Address({
  currentStep,
  setCurrentStep,
  handleNextStep,
  address,
  setAddress,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  postCode,
  setPostCode,
  city,
  setCity,
  setIsNextStepDisabled,
  isNextStepDisabled,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleNextStep: () => void;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postCode: string;
  city: string;
  setAddress: (address: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setPostCode: (postCode: string) => void;
  setCity: (city: string) => void;
  setIsNextStepDisabled: (isNextStepDisabled: boolean) => void;
  isNextStepDisabled: boolean;
}) {
  const cities = [
    "Sofia",
    "Plovdiv",
    "Varna",
    "Burgas",
    "Stara Zagora",
    "Vidin",
    "Ruse",
    "Veliko Tarnovo",
    "Sliven",
    "Pleven",
    "Shumen",
    "Pernik",
    "Yambol",
  ];
  return (
    <div>
      {currentStep === 1 && (
        <div className="flex items-center gap-6 my-8">
          <span className="flex items-center justify-center w-6 h-6 p-4 text-lg bg-gray-300 font-medium text-white rounded-full">
            2
          </span>
          <h2 className="text-2xl font-medium">Shipping Address</h2>
        </div>
      )}

      {currentStep === 2 && (
        <>
          <div className="flex items-center gap-6 my-8">
            <span className="flex items-center justify-center w-6 h-6 p-4 text-lg bg-red-500 font-medium text-white rounded-full">
              2
            </span>
            <h2 className="text-2xl font-medium">Shipping Address</h2>
          </div>
          <ul className="md:grid md:grid-cols-2 md:gap-4 md:space-y-0 space-y-4 w-full mb-5">
            <li className="w-full space-y-2">
              <Label>
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-14 text-lg text-gray-500"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </li>
            <li className="w-full space-y-2">
              <Label>
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-14 text-lg text-gray-500"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </li>
            <li className="w-full space-y-2">
              <Label>
                Email address <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-14 text-lg text-gray-500"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </li>
            <li className="w-full space-y-2">
              <Label>
                Phone number <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-14 text-lg text-gray-500"
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </li>
            <li className="w-full space-y-2">
              <Label>
                City <span className="text-red-500">*</span>
              </Label>
              <Select
                value={city}
                onValueChange={(value) => {
                  setCity(value);
                  setIsNextStepDisabled(false);
                }}
              >
                <SelectTrigger className="w-full h-14 text-lg text-gray-500">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
            <li className="w-full space-y-2">
              <Label>
                Postcode <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-14 text-lg text-gray-500"
                type="text"
                value={postCode}
                onChange={(event) => setPostCode(event.target.value)}
              />
            </li>
            <li className="w-full space-y-2 col-span-2">
              <Label>
                Home / apartment number and street address{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-14 text-lg text-gray-500"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </li>
          </ul>

          <div className="mt-8 w-full">
            <Button
              className="w-full flex items-center gap-1 bg-[#F55266] hover:bg-[#F2223B] text-lg"
              type="button"
              onClick={handleNextStep}
              disabled={
                isNextStepDisabled ||
                address.trim() === "" ||
                postCode.trim() === "" ||
                city.trim() === "" ||
                phone.trim() === "" ||
                email.trim() === "" ||
                lastName.trim() === "" ||
                firstName.trim() === ""
              }
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </>
      )}

      {currentStep > 2 && (
        <>
          <div className="flex items-center gap-6 my-8">
            <span className="flex items-center justify-center p-2 text-lg bg-gray-300 font-medium text-white rounded-full">
              <Check className="w-4 h-4" />
            </span>
            <div className="flex items-center justify-between w-full">
              <h2 className="md:text-2xl md:font-medium font-semibold">
                Shipping Address
              </h2>
              <button
                onClick={() => setCurrentStep(2)}
                className="text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-gray-600 font-medium underline underline-offset-4 hover:no-underline cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="text-gray-500 ml-14 mb-5 space-y-2">
            <p>
              {firstName} {lastName}
            </p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>
              {city} {postCode}
            </p>
            <p>{address}</p>
          </div>
        </>
      )}
    </div>
  );
}
