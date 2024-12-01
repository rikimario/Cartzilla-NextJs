"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import supabase from "@/config/supabaseClient";
import Link from "next/link";
import React, { useState } from "react";

type userData = {
  email: string;
  password: string;
};

export default function Register() {
  const [user, setUser] = useState<userData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });
  };
  return (
    <div className="my-10 mx-2 md:mx-12 lg:mx-52 xl:mx-96 2xl:my-20 2xl:mx-[35rem] dark:bg-[#181D25]">
      <Card className="flex flex-col items-center justify-center p-2 dark:bg-[#181D25]">
        <CardContent className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 xl:p-6"
            action="#"
          >
            <div className="my-4">
              <h1 className="text-3xl text-gray-900 dark:text-white mb-4 font-semibold">
                Create and account
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
                placeholder="Email"
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                className="border border-gray-300 w-full p-3 rounded-2xl"
                placeholder="Password"
                type="text"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              className="bg-[#F55266] hover:bg-[#F2223B] w-full p-3 text-xl font-light dark:text-white rounded-2xl mt-6"
              type="submit"
            >
              Create an account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
