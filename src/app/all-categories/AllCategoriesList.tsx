"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AllCategoriesList() {
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [home, setHome] = useState([]);
  const [cosmetics, setCosmetics] = useState([]);
  const [automotive, setAutomotive] = useState([]);
  const [sports, setSports] = useState([]);
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setMens(data.products.splice(0, 1)));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((data) => setWomens(data.products.splice(1, 1)));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/tablets")
      .then((res) => res.json())
      .then((data) => setTablets(data.products.splice(0, 1)));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/home-decoration")
      .then((res) => res.json())
      .then((data) => setHome(data.products.splice(0, 1)));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty")
      .then((res) => res.json())
      .then((data) => setCosmetics(data.products.splice(0, 1)));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/motorcycle")
      .then((res) => res.json())
      .then((data) => setAutomotive(data.products.splice(0, 1)));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((data) => setSports(data.products.splice(0, 1)));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sunglasses")
      .then((res) => res.json())
      .then((data) => setSunglasses(data.products.splice(0, 1)));
  }, []);
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Mens */}
      <div className="py-2">
        {mens.map((men: { title: string; thumbnail: string; id: number }) => (
          <div
            key={men.id}
            className="bg-gray-100 dark:bg-[#222934] rounded-lg"
          >
            <Link href="categories/all-men">
              <Image
                className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                src={men.thumbnail}
                alt={men.title}
                width={400}
                height={400}
              />
            </Link>
          </div>
        ))}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/all-men">Men</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="categories/all-men/men-t-shirts">Mens T-Shirts</Link>
          </li>
          <li>
            <Link href="/men-shoes">Mens Shoes</Link>
          </li>
          <li>
            <Link href="/man-watches">Mens Watches</Link>
          </li>
        </ul>
      </div>

      {/* Women */}
      <div className="py-2">
        {womens.map(
          (women: { title: string; thumbnail: string; id: number }) => (
            <div
              key={women.id}
              className="bg-gray-100 dark:bg-[#222934] rounded-lg"
            >
              <Link href="categories/all-women">
                <Image
                  className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                  src={women.thumbnail}
                  alt={women.title}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          )
        )}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/all-women">Women</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="/women-tops">Women Tops</Link>
          </li>
          <li>
            <Link href="/women-dresses">Women Dresses</Link>
          </li>
          <li>
            <Link href="/women-shoes">Women Shoes</Link>
          </li>
          <li>
            <Link href="/women-bags">Women Bags</Link>
          </li>
          <li>
            <Link href="/women-jewelry">Women Jewelry</Link>
          </li>
        </ul>
      </div>

      {/* Electronics */}
      <div className="py-2">
        {tablets.map(
          (tablet: { title: string; thumbnail: string; id: number }) => (
            <div
              key={tablet.id}
              className="bg-gray-100 dark:bg-[#222934] rounded-lg"
            >
              <Link href="categories/all-electronics">
                <Image
                  className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                  src={tablet.thumbnail}
                  alt={tablet.title}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          )
        )}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/all-electronics">Electronics</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="/laptops">Laptops</Link>
          </li>
          <li>
            <Link href="/tablets">Tablets</Link>
          </li>
          <li>
            <Link href="/smartphones">Smartphones</Link>
          </li>
          <li>
            <Link href="/mobile-accessories">Mobile Accessories</Link>
          </li>
        </ul>
      </div>

      {/* Home & Kitchen */}
      <div className="py-2">
        {home.map((item: { title: string; thumbnail: string; id: number }) => (
          <div
            key={item.id}
            className="bg-gray-100 dark:bg-[#222934] rounded-lg"
          >
            <Link href="categories/all-groceries">
              <Image
                className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                src={item.thumbnail}
                alt={item.title}
                width={400}
                height={400}
              />
            </Link>
          </div>
        ))}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/all-groceries">Home & Kitchen</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="/furniture">Furniture</Link>
          </li>
          <li>
            <Link href="/kitchen">Kitchen</Link>
          </li>
          <li>
            <Link href="/decorations">Decorations</Link>
          </li>
          <li>
            <Link href="/groceries">Groceries</Link>
          </li>
        </ul>
      </div>

      {/* Cosmetics */}
      <div className="py-2">
        {cosmetics.map(
          (item: { title: string; thumbnail: string; id: number }) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-[#222934] rounded-lg"
            >
              <Link href="categories/all-cosmetics">
                <Image
                  className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          )
        )}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/all-cosmetics">Cosmetics</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="/beauty">Beauty</Link>
          </li>
          <li>
            <Link href="/skin-care">Skin Care</Link>
          </li>
          <li>
            <Link href="/fragrances">Fragrances</Link>
          </li>
        </ul>
      </div>

      {/* Automotive */}
      <div className="py-2">
        {automotive.map(
          (item: { title: string; thumbnail: string; id: number }) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-[#222934] rounded-lg"
            >
              <Link href="categories/all-automotive">
                <Image
                  className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          )
        )}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/all-automotive">Automotive</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="/cars">Cars</Link>
          </li>
          <li>
            <Link href="/motorcycles">Motorcycles</Link>
          </li>
        </ul>
      </div>

      {/* Sports Accessories */}
      <div className="py-2">
        {sports.map(
          (item: { title: string; thumbnail: string; id: number }) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-[#222934] rounded-lg"
            >
              <Link href="categories/sports-accessories">
                <Image
                  className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          )
        )}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/sports-accessories">Sports Accessories</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="categories/sports-accessories">See All</Link>
          </li>
        </ul>
      </div>

      {/* Sunglasses */}
      <div className="py-2">
        {sunglasses.map(
          (item: { title: string; thumbnail: string; id: number }) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-[#222934] rounded-lg"
            >
              <Link href="categories/sunglasses">
                <Image
                  className="hover:scale-105 hover:overflow-hidden hover:cursor-pointer hover:ease-in-out hover:duration-300"
                  src={item.thumbnail}
                  alt={item.title}
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          )
        )}
        <p className="text-gray-900 dark:text-white py-4 font-semibold">
          <Link href="categories/sunglasses">Sunglasses</Link>
        </p>
        <ul className="text-gray-700 dark:text-gray-300 flex flex-col gap-2">
          <li>
            <Link href="categories/sunglasses">See All</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
