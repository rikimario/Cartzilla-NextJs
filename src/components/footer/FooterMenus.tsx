import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function FooterMenus() {
  const t = useTranslations("FooterMenus");
  return (
    <div className="flex w-full justify-evenly">
      <div className="px-2">
        <span className="text-lg font-semibold">{t("company")}</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <Link href="#">
            <li className="hover:text-gray-400">{t("aboutCompany")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("ourTeam")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("careers")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("contactUs")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("news")}</li>
          </Link>
        </ul>
      </div>

      <div className="px-2">
        <span className="text-lg font-semibold">{t("account")}</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <Link href="#">
            <li className="hover:text-gray-400">{t("yourAccount")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("shippingPolicies")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("refundReplacements")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("deliveryInfo")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("orderTracking")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("taxesFees")}</li>
          </Link>
        </ul>
      </div>

      <div className="px-2">
        <span className="text-lg font-semibold">{t("customerService")}</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <Link href="#">
            <li className="hover:text-gray-400">{t("paymentMethods")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("moneyBackGuarantee")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("productReturns")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("supportCenter")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("shipping")}</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">{t("termsConditions")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
