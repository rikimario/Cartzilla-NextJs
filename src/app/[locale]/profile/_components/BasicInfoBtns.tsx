import { Button } from "@/components/ui/button";
import { PersonalInformation } from "@/lib/types";
import { useTranslations } from "next-intl";
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
  const isBasicInfoEmpty =
    !personalInfo?.date_of_birth ||
    !personalInfo.language ||
    !personalInfo.first_name ||
    !personalInfo.last_name ||
    Object.keys(personalInfo).length === 0;
  const t = useTranslations("Profile");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
      <Button onClick={addNewInfo} variant={"destructive"} className="w-full">
        {t("save")}
      </Button>
      <Button
        onClick={() => !isBasicInfoEmpty && setIsOpen(false)}
        variant={"outline"}
        className="w-full bg-gray-200"
      >
        {t("close")}
      </Button>
    </div>
  );
}
