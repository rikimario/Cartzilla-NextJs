"use client";

import Benefits from "@/components/benefits/Benefits";
import Brands from "@/components/brands/Brands";
import Hero from "@/components/hero/Hero";
import NewArrivals from "@/components/new-arrivals/NewArrivals";
import SpecialOffers from "@/components/special-offers/SpecialOffers";
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
      <SpecialOffers />
      <Brands />
    </>
  );
}
