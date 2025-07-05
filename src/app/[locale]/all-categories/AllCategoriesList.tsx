"use client";
import Image from "next/image";
import Link from "next/link";
import { allCategoriesInfo } from "./allCategoriesInfo";
import { useTranslations } from "next-intl";

export default function AllCategoriesList() {
  const info = allCategoriesInfo;
  const t = useTranslations();

  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {info.map((item, index) => (
        <div key={index}>
          <div className="bg-gray-100 dark:bg-[#222934] rounded-lg">
            <Link href="categories/all-men">
              <Image
                className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
              />
            </Link>
          </div>
          <div>
            <p className="text-gray-900 dark:text-white py-4 font-semibold">
              <Link href={item.href}>{t(item.name)}</Link>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
              {item.sublinks.map((sublink, index) => (
                <li key={index}>
                  <Link href={sublink.link}>{t(sublink.name)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
