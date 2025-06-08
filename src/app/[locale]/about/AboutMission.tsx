import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AboutMission() {
  const t = useTranslations("About");
  return (
    <div className="py-14">
      <div
        id="mission"
        className="flex flex-col justify-center items-center py-14 lg:px-20 xl:px-36"
      >
        <p className="text-gray-600 dark:text-gray-300">
          {t("mission.paragraph1")}
        </p>
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white p-6 text-center">
          {t("mission.title")}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center px-6">
          {t("mission.paragraph2")}
        </p>
        <div className="pt-6">
          <Image
            className="rounded-full h-20 w-20 object-cover"
            src="/about-avatar.jpg"
            alt="about-avatar"
            width={70}
            height={70}
          />
        </div>
        <p className="pt-4 text-gray-900 dark:text-white text-xl font-semibold">
          William Lacker, Cartzilla CEO
        </p>
      </div>
    </div>
  );
}
