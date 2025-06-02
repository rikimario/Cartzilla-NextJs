import { Button } from "@/components/ui/button";
import { ContactInformation } from "@/lib/types";
import React from "react";

export default function ContactInfoBtns({
  addContactInfo,
  setIsOpen,
  contact,
}: {
  addContactInfo: () => void;
  setIsOpen: (isOpen: boolean) => void;
  contact: ContactInformation | null;
}) {
  const isContactInfoEmpty =
    !contact?.email || !contact.phone || Object.keys(contact).length === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8 w-1/2">
      <Button
        onClick={addContactInfo}
        variant={"destructive"}
        className="w-full"
      >
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
