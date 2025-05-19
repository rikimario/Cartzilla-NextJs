import { Button } from "@/components/ui/button";
import React from "react";

export default function AddressBtns({
  addNewAddress,
}: {
  addNewAddress: () => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 w-1/2">
      <Button
        onClick={addNewAddress}
        variant={"destructive"}
        className="w-full"
      >
        Add address
      </Button>
      <Button variant={"outline"} className="w-full bg-gray-200">
        Close
      </Button>
    </div>
  );
}
