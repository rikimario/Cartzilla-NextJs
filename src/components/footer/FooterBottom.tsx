import Image from "next/image";
import React from "react";

export default function FooterBottom() {
  return (
    <div className="md:flex md:flex-row-reverse items-center justify-between py-4 border-t-[1px] border-gray-700">
      <div className="flex items-center justify-center">
        <div>
          <Image src="/visa-dark-mode.svg" alt="visa" width={70} height={70} />
        </div>
        <div>
          <Image
            src="/mastercard.svg"
            alt="mastercard"
            width={70}
            height={70}
          />
        </div>
        <div>
          <Image
            src="/paypal-dark-mode.svg"
            alt="paypal"
            width={70}
            height={70}
          />
        </div>
        <div>
          <Image
            src="/google-pay-dark-mode.svg"
            alt="google-pay"
            width={70}
            height={70}
          />
        </div>
        <div>
          <Image
            src="/apple-pay-dark-mode.svg"
            alt="apple-pay"
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className="text-xs md:text-sm text-center pt-2 text-gray-300">
        <p>
          &copy; All rights reserved. Made by{" "}
          <span className="text-white">Mario</span>
        </p>
      </div>
    </div>
  );
}
