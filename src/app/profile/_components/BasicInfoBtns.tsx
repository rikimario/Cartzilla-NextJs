import { Button } from "@/components/ui/button";
import React from "react";

export default function BasicInfoBtns({
  addNewInfo,
}: {
  addNewInfo: () => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
      <Button onClick={addNewInfo} variant={"destructive"} className="w-full">
        Save changes
      </Button>
      <Button variant={"outline"} className="w-full bg-gray-200">
        Close
      </Button>
    </div>
  );
}
