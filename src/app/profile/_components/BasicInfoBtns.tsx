import { Button } from "@/components/ui/button";
import React from "react";

export default function BasicInfoBtns({
  addNewInfo,
  setIsOpen,
}: {
  addNewInfo: () => void;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
      <Button onClick={addNewInfo} variant={"destructive"} className="w-full">
        Save changes
      </Button>
      <Button
        onClick={() => setIsOpen(false)}
        variant={"outline"}
        className="w-full bg-gray-200"
      >
        Close
      </Button>
    </div>
  );
}
