import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenLine } from "lucide-react";
import React from "react";

export default function LeaveReview() {
  return (
    <div className="flex gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-gray-100 text-gray-900 hover:bg-gray-300 font-semibold flex items-center gap-2">
            <PenLine className="h-5 w-5" strokeWidth={2} />
            Leave a review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name: *</Label>
              <Input
                required
                type="text"
                id="name"
                placeholder="Maximum 50 characters"
                className="text-gray-900 dark:text-white font-semibold placeholder:text-gray-350"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5 text-sm">
              <Label htmlFor="review">Comment: *</Label>
              <textarea
                required
                id="review"
                placeholder="Maximum 3000 characters"
                className="text-gray-900 dark:text-white font-semibold w-full px-3 py-2 rounded-md border border-input min-h-32"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-gray-200 text-gray-900 hover:bg-gray-300 font-semibold"
            >
              Submit review
            </Button>
          </DialogFooter>
          <span className="text-gray-500 text-sm font-light">
            * Required fields
          </span>
        </DialogContent>
      </Dialog>
    </div>
  );
}
