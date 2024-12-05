import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { login } from "../../../utils/supabase/actions";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }
  return (
    <div className="my-10 mx-2 md:mx-12 lg:mx-52 xl:mx-96 2xl:my-20 2xl:mx-[35rem] dark:bg-[#181D25]">
      <Card className="flex flex-col items-center justify-center p-2 dark:bg-[#181D25]">
        <CardContent className="w-full">
          <form className="flex flex-col gap-2 xl:p-6">
            <div className="my-4">
              <h1 className="text-3xl text-gray-900 dark:text-white mb-4 font-semibold">
                Welcome back
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                Don't have an account?{" "}
                <span className="text-gray-900 dark:text-white hover:text-gray-500 font-semibold underline underline-offset-2">
                  <Link href={"/register"}>Sign up</Link>
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
              />
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
              />
            </div>

            <div className="flex flex-col gap-2 my-4">
              <div className="flex items-center gap-1 ml-2">
                <Checkbox />
                <p className="text-sm text-gray-700 dark:text-gray-400 ml-2">
                  Remember for 30 days
                </p>
              </div>
            </div>

            <Button
              className="bg-[#F55266] hover:bg-[#F2223B] w-full p-3 text-xl font-light dark:text-white rounded-2xl mt-6"
              formAction={login}
            >
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
