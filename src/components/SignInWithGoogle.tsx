"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signInWithGoogle } from "../../utils/supabase/actions";
import Image from "next/image";

export default function SignInWithGoogleButton() {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full flex items-center justify-center gap-2 text-gray-900 dark:text-white"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <Image
        src="/google-brands-solid.svg"
        alt="google"
        width={20}
        height={20}
      />
      <span className="text-xl">Google</span>
    </Button>
  );
}
