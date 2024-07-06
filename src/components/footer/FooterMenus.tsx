import Link from "next/link";
import React from "react";

export default function FooterMenus() {
  return (
    <div className="flex w-full justify-evenly">
      <div className="px-2">
        <span className="text-lg font-semibold">Company</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <Link href="#">
            <li className="hover:text-gray-400">About company</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Our team</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Careers</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Contact us</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">News</li>
          </Link>
        </ul>
      </div>

      <div className="px-2">
        <span className="text-lg font-semibold">Account</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <Link href="#">
            <li className="hover:text-gray-400">Your account</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Shipping rates & policies</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Refund & replacements</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Delivery info</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Order tracking</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Taxes & fees</li>
          </Link>
        </ul>
      </div>

      <div className="px-2">
        <span className="text-lg font-semibold">Customer service</span>
        <ul className="text-gray-300 text-sm flex flex-col gap-3 pt-2">
          <Link href="#">
            <li className="hover:text-gray-400">Payment methods</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Money back guarantee</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Product returns</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Support center</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Shipping</li>
          </Link>
          <Link href="#">
            <li className="hover:text-gray-400">Terms & conditions</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
