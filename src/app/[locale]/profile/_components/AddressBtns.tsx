import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import React from "react";

export default function AddressBtns({
  addNewAddress,
  closeDialog,
}: {
  addNewAddress: () => void;
  closeDialog: () => void;
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
      <Button
        onClick={closeDialog}
        variant={"outline"}
        className="w-full bg-gray-200"
      >
        Close
      </Button>
    </div>
  );
}
