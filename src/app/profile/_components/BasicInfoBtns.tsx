import { Button } from "@/components/ui/button";
import { PersonalInformation } from "@/lib/types";
import React from "react";

export default function BasicInfoBtns({
  addNewInfo,
  setIsOpen,
  personalInfo,
}: {
  addNewInfo: () => void;
  setIsOpen: (isOpen: boolean) => void;
  personalInfo: PersonalInformation | null;
}) {
  const isContactInfoEmpty =
    personalInfo === null || Object.keys(personalInfo).length === 0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
      <Button onClick={addNewInfo} variant={"destructive"} className="w-full">
        Save changes
      </Button>
      <Button
        onClick={() => !isContactInfoEmpty && setIsOpen(false)}
        variant={"outline"}
        className="w-full bg-gray-200"
      >
        Close
      </Button>
    </div>
  );
}
