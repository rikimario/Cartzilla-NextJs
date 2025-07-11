import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NewsLetter from "@/components/newsletter/NewsLetter";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Breadcrumbs from "./utils/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CartZilla",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body className={`${inter.className} dark:bg-[#181D25]`}>
          <NextTopLoader />
          <Toaster position="top-center" />
          <Navbar />
          <div className="dark:bg-[#181D25] max-w-[83rem] mx-3 xl:mx-auto">
            <Breadcrumbs />
            {children}
          </div>
          <NewsLetter />
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
