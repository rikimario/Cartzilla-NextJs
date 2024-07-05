import React from "react";

export default function FooterMenus() {
  return (
    <div className="flex w-full justify-evenly">
      <div className="px-2">
        <span className="text-lg font-semibold">Company</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <li>About company</li>
          <li>Our team</li>
          <li>Careers</li>
          <li>Contact us</li>
          <li>News</li>
        </ul>
      </div>

      <div className="px-2">
        <span className="text-lg font-semibold">Account</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <li>Your account</li>
          <li>Shipping rates & policies</li>
          <li>Refund & replacements</li>
          <li>Delivery info</li>
          <li>Order tracking</li>
          <li>Taxes & fees</li>
        </ul>
      </div>

      <div className="px-2">
        <span className="text-lg font-semibold">Customer service</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <li>Payment methods</li>
          <li>Money back guarantee</li>
          <li>Product returns</li>
          <li>Support center</li>
          <li>Shipping</li>
          <li>Terms & conditions</li>
        </ul>
      </div>
    </div>
  );
}
