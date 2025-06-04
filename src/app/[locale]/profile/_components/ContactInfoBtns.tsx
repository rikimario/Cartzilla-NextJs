import { Button } from "@/components/ui/button";
import { ContactInformation } from "@/lib/types";
import { useTranslations } from "next-intl";
import React, { use } from "react";

export default function ContactInfoBtns({
  addContactInfo,
  setIsOpen,
  contact,
}: {
  addContactInfo: () => void;
  setIsOpen: (isOpen: boolean) => void;
  contact: ContactInformation | null;
}) {
  const t = useTranslations("Profile");
  const isContactInfoEmpty =
    !contact?.email || !contact.phone || Object.keys(contact).length === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8 w-1/2">
      <Button
        onClick={addContactInfo}
        variant={"destructive"}
        className="w-full"
      >
        {t("save")}
      </Button>
      <Button
        onClick={() => !isContactInfoEmpty && setIsOpen(false)}
        variant={"outline"}
        className="w-full bg-gray-200"
      >
        {t("close")}
      </Button>
    </div>
  );
}
