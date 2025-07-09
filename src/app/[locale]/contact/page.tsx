import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Mail, MapPin, PhoneOutgoing } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Page() {
  const t = useTranslations("Contact");
  return (
    <div className="py-6">
      <div className="text-center py-6">
        <h1 className="text-3xl lg:text-4xl text-gray-900 dark:text-white font-semibold py-4">
          {t("title")}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 pb-4">
          {t("paragraph")}
        </p>
      </div>

      <div className="md:flex">
        <div className="p-8 md:px-14 xl:px-24 bg-gray-100 dark:bg-[#222934] w-full rounded-2xl md:rounded-r-none md:rounded-br-none">
          <form>
            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                {t("name")} *
              </label>
              <input
                className="w-full h-12 dark:bg-inherit rounded-3xl border border-gray-300 px-4"
                type="text"
              />
            </div>

            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                {t("email")} *
              </label>
              <input
                className="w-full h-12 dark:bg-inherit rounded-3xl border border-gray-300 px-4"
                type="email"
              />
            </div>

            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                {t("subject")} *
              </label>
              <Select>
                <SelectTrigger className="w-full h-12 dark:bg-inherit rounded-3xl border border-gray-300 text-gray-600 dark:text-white px-4">
                  <SelectValue
                    className="text-gray-300"
                    placeholder={t("selectSubject")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="general-inquiry">
                      {t("subject1")}
                    </SelectItem>
                    <SelectItem value="order-status">
                      {t("subject7")}
                    </SelectItem>
                    <SelectItem value="product-information">
                      {t("subject2")}
                    </SelectItem>
                    <SelectItem value="technical-support">
                      {t("subject3")}
                    </SelectItem>
                    <SelectItem value="website-feedback">
                      {t("subject4")}
                    </SelectItem>
                    <SelectItem value="account-assistance">
                      {t("subject5")}
                    </SelectItem>
                    <SelectItem value="security-concerns">
                      {t("subject6")}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="pb-6 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 dark:text-white"
                htmlFor=""
              >
                {t("message")} *
              </label>
              <textarea
                className="w-full min-h-44 bg-white dark:bg-inherit rounded-3xl border border-gray-300 p-4"
                name=""
                id=""
              ></textarea>
            </div>

            <div>
              <Button className="rounded-3xl" size="lg">
                {t("send")}
              </Button>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-full">
          <Image
            className="h-full w-full object-cover rounded-r-2xl rounded-br-2xl"
            src="/form-image.jpg"
            alt="form-image"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b-[1px] border-gray-200">
        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <PhoneOutgoing className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            {t("callUs")}
          </p>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">
              {t("customers")}:
            </p>
            <p>+1 50 537 53 082</p>
          </div>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">
              {t("franchise")}:
            </p>
            <p>+1 50 537 53 000</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <Mail className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            {t("sendAMessage")}
          </p>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">
              {t("customers")}:
            </p>
            <p>info@cartzilla.com</p>
          </div>
          <div className="flex lg:flex-col xl:flex-row text-center gap-2">
            <p className="text-gray-500 dark:text-gray-300">
              {t("franchise")}:
            </p>
            <p>franchise@cartzilla.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <MapPin className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            {t("storeLocation")}
          </p>
          <div className="text-center h-full">
            <p className="text-gray-500 dark:text-gray-300">
              New York 11741, USA
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              396 Lillian Bolavandy, Holbrook
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 dark:bg-[#222934] p-3 rounded-full">
            <Clock className="w-5 h-5" strokeWidth={2} />
          </div>
          <p className="text-gray-900 dark:text-white font-semibold text-lg py-3">
            {t("workingHours")}
          </p>
          <div className="text-center h-full">
            <p className="text-gray-500 dark:text-gray-300">
              Mon - Fri 8:00 - 18:00
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              Sat - Sun 10:00 - 16:00
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white pb-5">
          {t("lookingForSupport")}
        </h1>
        <p className="text-gray-500 dark:text-gray-300 pb-5">
          {t("supportParagraph")}
        </p>
        <Button
          size="lg"
          variant="outline"
          className="rounded-3xl bg-inherit text-gray-900 dark:text-white border-gray-800 dark:border-white text-lg"
        >
          {t("help")}
        </Button>
      </div>
    </div>
  );
}
