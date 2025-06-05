import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function TermsAndConditions() {
  const t = useTranslations("TermsAndConditions");
  return (
    <div className="mt-14 lg:mx-32">
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold pb-8 border-b-[1px]">
          {t("title")}
        </h1>

        <div className="space-y-4 my-10">
          <p className="text-gray-500">
            {t("lastUpdated")}{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {t("lastUpdatedDate")}
            </span>
          </p>
          <p className="text-gray-500">{t("intro")}</p>
        </div>

        <div className="text-gray-500 my-4">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 dark:text-white">
            {t("overview.title")}
          </h2>
          <p>{t("overview.description1")}</p>
          <p className="mt-4">{t("overview.description2")}</p>
        </div>

        <div className="text-gray-500 my-4">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 dark:text-white">
            {t("use.title")}
          </h2>
          <p className="mt-4">{t("use.description")}</p>

          <div className="my-4">
            <p className="font-semibold text-gray-900 dark:text-white">
              {t("use.subheading")}
            </p>
            <ul className="mt-4 space-y-4">
              <li className="list-disc ml-8">{t("use.list.1")}</li>
              <li className="list-disc ml-8">{t("use.list.2")}</li>
              <li className="list-disc ml-8">{t("use.list.3")}</li>
              <li className="list-disc ml-8">{t("use.list.4")}</li>
              <li className="list-disc ml-8">{t("use.list.5")}</li>
              <li className="list-disc ml-8">{t("use.list.6")}</li>
              <li className="list-disc ml-8">{t("use.list.7")}</li>
              <li className="list-disc ml-8">{t("use.list.8")}</li>
              <li className="list-disc ml-8">{t("use.list.9")}</li>
            </ul>
          </div>
        </div>

        <div className="text-gray-500 my-4">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 dark:text-white">
            {t("order.title")}
          </h2>
          <p>{t("order.description")}</p>
          <ul className="my-4 space-y-4">
            <li className="list-disc ml-8">{t("order.list.1")}</li>
            <li className="list-disc ml-8">{t("order.list.2")}</li>
            <li className="list-disc ml-8">{t("order.list.3")}</li>
            <li className="list-disc ml-8">{t("order.list.4")}</li>
          </ul>
        </div>

        <div className="text-gray-500 my-4">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 dark:text-white">
            {t("payment.title")}
          </h2>
          <p>{t("payment.description")}</p>
        </div>

        <div className="text-gray-500 my-4">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 dark:text-white">
            {t("conduct.title")}
          </h2>
          <p>{t("conduct.description")}</p>

          <div className="my-4 space-y-4">
            <p className="font-semibold text-gray-900 dark:text-white">
              {t("conduct.ipTitle")}
            </p>
            <p>{t("conduct.ipDescription")}</p>
          </div>

          <div className="my-4 space-y-4">
            <p className="font-semibold text-gray-900 dark:text-white">
              {t("conduct.thirdPartyTitle")}
            </p>
            <p>{t("conduct.thirdPartyDescription")}</p>
          </div>

          <div className="my-4 space-y-4">
            <p className="font-semibold text-gray-900 dark:text-white">
              {t("conduct.warrantyTitle")}
            </p>
            <p>{t("conduct.warrantyDescription")}</p>
          </div>

          <div className="my-4 space-y-4">
            <p className="font-semibold text-gray-900 dark:text-white">
              {t("conduct.liabilityTitle")}
            </p>
            <p>{t("conduct.liabilityDescription")}</p>
          </div>
        </div>

        <div className="text-gray-500 my-4">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 dark:text-white">
            {t("agreement.title")}
          </h2>
          <p>{t("agreement.description1")}</p>
          <p className="my-4">{t("agreement.description2")}</p>
        </div>

        <div className="text-gray-500 my-4">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 dark:text-white">
            {t("contact.title")}
          </h2>
          <p>{t("contact.intro")}</p>

          <ul className="my-4 space-y-2">
            <li className="flex gap-2 items-center text-gray-600 hover:text-gray-800 cursor-pointer">
              <PhoneIcon className="w-5 h-5" /> +1 50 537 53 082
            </li>
            <li className="flex gap-2 items-center text-gray-600 hover:text-gray-800 cursor-pointer">
              <MailIcon className="w-5 h-5" /> contact@catzillastore.com
            </li>
            <li className="flex gap-2 items-center text-gray-600 hover:text-gray-800 cursor-pointer">
              <MapPinIcon className="w-5 h-5" /> 12 Beale St. Suite 600 San
              Francisco, California 94105
            </li>
          </ul>

          <p className="my-4 space-x-2">
            {t("contact.helpText")}{" "}
            <span>
              <Link
                href="/help-center"
                className="text-blue-600 underline underline-offset-4 hover:no-underline"
              >
                {t("contact.helpLink")}
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
