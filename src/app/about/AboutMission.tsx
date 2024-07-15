import Image from "next/image";
import React from "react";

export default function AboutMission() {
  return (
    <div
      id="mission"
      className="flex flex-col justify-center items-center py-14 lg:px-20 xl:px-36"
    >
      <p className="text-gray-600">Mission</p>
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 p-6 text-center">
        The best products at fair prices
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center px-6">
        "We believe that things exist to make life easier, more pleasant and
        kinder. That's why the search for the right thing should be quick,
        convenient and enjoyable. We do not just sell household appliances and
        electronics, but comfort and accessibility."
      </p>
      <div className="pt-6">
        <Image
          className="rounded-full h-20 w-20 object-cover"
          src="/about-avatar.jpg"
          alt="about-avatar"
          width={70}
          height={70}
        />
      </div>
      <p className="pt-4 text-gray-900 text-xl font-semibold">
        William Lacker, Cartzilla CEO
      </p>
    </div>
  );
}
