import { Button } from "@/components/ui/button";
import React from "react";

export default function DeleteAccount() {
  return (
    <div className="my-8 border-b-[1px] border-gray-200">
      <h1 className="mb-4 font-semibold">Delete account</h1>
      <p className="text-gray-500">
        When you delete your account, your public profile will be deactivated
        immediately. If you change your mind before the 14 days are up, sign in
        with your email and password, and we'll send you a link to reactivate
        your account.
      </p>
      <Button className="pl-0 my-4 text-red-500" variant={"link"}>
        Delete account
      </Button>
    </div>
  );
}
