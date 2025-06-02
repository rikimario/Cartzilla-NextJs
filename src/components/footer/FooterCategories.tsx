import React from "react";
import Link from "next/link";
import { footerLinks } from "./FooterCategoriesLinks";

export default function FooterCategories() {
  const links = footerLinks();
  return (
    <div className="text-gray-300 text-sm flex flex-wrap gap-3 pt-6 pb-8">
      {links.map((link) => (
        <span key={link.name}>
          <Link className="flex gap-2 hover:text-gray-400" href={link.link}>
            {link.name} <span className="text-gray-500">/</span>
          </Link>
        </span>
      ))}
    </div>
  );
}
