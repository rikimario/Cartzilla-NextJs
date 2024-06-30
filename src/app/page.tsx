"use client";

import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import NewArrivals from "@/components/new-arrivals/NewArrivals";
import TrendingProducts from "@/components/trending-products/TrendingProducts";
import WeeklySaleBanner from "@/components/weekly-sale-banner/WeeklySaleBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <NewArrivals />
      <TrendingProducts />
      <WeeklySaleBanner />
    </>
  );
}
