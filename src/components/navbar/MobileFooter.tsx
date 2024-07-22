import { Heart, User } from "lucide-react";
import React from "react";

export default function MobileFooter() {
  return (
    <div className="absolute flex bottom-0 left-0 right-0 bg-inherit py-6 border-t-2 border-gray-200 items-center justify-around">
      <div className="flex items-center justify-center w-full border-r-2 border-x-gray-200 p-2 gap-2">
        <span>
          <User className="h-6 w-6" strokeWidth={1} />
        </span>
        Account
      </div>
      <div className="flex items-center justify-center w-full p-2 gap-2">
        <span>
          <Heart className="h-6 w-6" strokeWidth={1} />
        </span>
        Wishlist
      </div>
    </div>
  );
}
