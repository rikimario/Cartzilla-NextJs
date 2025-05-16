import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";

export default function AddAddress() {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="hover:underline underline-offset-4">
          <span className="flex items-center gap-2">
            <Plus className="w-5 h-5" strokeWidth={1} />
            Add Address
          </span>{" "}
        </DialogTrigger>
        <DialogContent className="dark:bg-inherit">
          <DialogDescription className="text-xl text-gray-900 dark:text-white font-semibold pb-4  border-b border-gray-400">
            Add new address
          </DialogDescription>
          <DialogTitle></DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
}
