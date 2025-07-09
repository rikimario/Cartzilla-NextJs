// "use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { signup } from "../../../../utils/supabase/actions";
import SignInWithGoogleButton from "@/components/SignInWithGoogle";
import { useTranslations } from "next-intl";

export default function Register() {
  const t = useTranslations("Register");
  return (
    <div className="my-10 lg:mx-60 xl:mx-80 dark:bg-[#181D25]">
      <Card className="flex flex-col items-center justify-center p-2 dark:bg-[#181D25]">
        <CardContent className="w-full">
          <form className="flex flex-col gap-2 xl:p-6">
            <div className="my-4">
              <h1 className="text-3xl text-gray-900 dark:text-white mb-4 font-semibold">
                {t("title")}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                {t("haveAccount")}{" "}
                <span className="text-gray-900 dark:text-white hover:text-gray-500 font-semibold underline underline-offset-2">
                  <Link href={"/login"}>{t("login")}</Link>
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder={t("username")}
                type="text"
                id="full_name"
                name="full_name"
                required
              />
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder={t("email")}
                type="email"
                id="email"
                name="email"
                required
              />
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder={t("password")}
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <p className="text-sm text-gray-400 ml-2">{t("passLength")}</p>

            <div className="flex flex-col gap-2 my-4">
              <div className="flex items-center gap-1 ml-2">
                <Checkbox />
                <p className="text-sm text-gray-700 dark:text-gray-400 ml-2">
                  {t("savePassword")}
                </p>
              </div>
              <div className="flex items-center gap-1 ml-2">
                <Checkbox />
                <p className="text-sm text-gray-700 dark:text-gray-400 ml-2">
                  {t("offers")}
                </p>
              </div>
            </div>

            <Button
              formAction={signup}
              className="bg-[#F55266] hover:bg-[#F2223B] w-full p-3 text-xl font-light dark:text-white rounded-2xl mt-6"
            >
              {t("register")}
            </Button>

            <div className="flex items-center justify-center">
              <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <p className="w-full text-center my-4 text-gray-700 dark:text-gray-400">
                {t("orContinue")}
              </p>
              <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <SignInWithGoogleButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
