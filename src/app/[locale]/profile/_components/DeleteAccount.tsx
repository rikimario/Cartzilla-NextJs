import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

export default function DeleteAccount() {
  const t = useTranslations("Profile");
  return (
    <div className="my-8 border-b-[1px] border-gray-200">
      <h1 className="mb-4 font-semibold">{t("deleteAccount")}</h1>
      <p className="text-gray-500">{t("deleteAccountDescription")}</p>
      <Button className="pl-0 my-4 text-red-500" variant={"link"}>
        {t("deleteAccount")}
      </Button>
    </div>
  );
}
