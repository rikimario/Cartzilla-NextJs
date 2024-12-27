// "use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { signup } from "../../../utils/supabase/actions";
import SignInWithGoogleButton from "@/components/SignInWithGoogle";

export default function Register() {
  return (
    <div className="my-10 mx-2 md:mx-12 lg:mx-52 xl:mx-96 2xl:my-20 2xl:mx-[35rem] dark:bg-[#181D25]">
      <Card className="flex flex-col items-center justify-center p-2 dark:bg-[#181D25]">
        <CardContent className="w-full">
          <form className="flex flex-col gap-2 xl:p-6">
            <div className="my-4">
              {/* {error && (
                <p className="text-sm text-red-500 dark:text-gray-400 ml-2">
                  {error}
                </p>
              )} */}
              <h1 className="text-3xl text-gray-900 dark:text-white mb-4 font-semibold">
                Create an account
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                I already have an account{" "}
                <span className="text-gray-900 dark:text-white hover:text-gray-500 font-semibold underline underline-offset-2">
                  <Link href={"/login"}>Sign in</Link>
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder="Username"
                type="text"
                id="full_name"
                name="full_name"
                required
              />
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required
              />
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <p className="text-sm text-gray-400 ml-2">
              password must be at least 6 characters
            </p>

            <div className="flex flex-col gap-2 my-4">
              <div className="flex items-center gap-1 ml-2">
                <Checkbox />
                <p className="text-sm text-gray-700 dark:text-gray-400 ml-2">
                  Save the password
                </p>
              </div>
              <div className="flex items-center gap-1 ml-2">
                <Checkbox />
                <p className="text-sm text-gray-700 dark:text-gray-400 ml-2">
                  I would like to receive offers from Cartzilla by email
                </p>
              </div>
            </div>

            <Button
              formAction={signup}
              className="bg-[#F55266] hover:bg-[#F2223B] w-full p-3 text-xl font-light dark:text-white rounded-2xl mt-6"
            >
              Create an account
            </Button>

            <div className="flex items-center justify-center">
              <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <p className="w-full text-center my-4 text-gray-700 dark:text-gray-400">
                or continue with
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
