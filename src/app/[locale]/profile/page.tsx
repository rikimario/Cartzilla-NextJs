"use client";
import React, { useEffect, useState } from "react";
import {
  Bell,
  CircleHelp,
  CreditCard,
  Heart,
  Info,
  LogOut,
  MapPin,
  PanelLeft,
  ShoppingBag,
  Star,
  UserRound,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { User } from "@supabase/supabase-js";
import OrdersContent from "./[userId]/userDashboard/OrdersContent";
import WishlistContent from "./[userId]/userDashboard/WishlistContent";
import PaymentMethods from "./[userId]/userDashboard/PaymentMethods";
import MyReviews from "./[userId]/userDashboard/MyReviews";
import PersonalInfo from "./[userId]/manageAccount/PersonalInfo";
import Addresses from "./[userId]/manageAccount/Addresses";
import Notifications from "./[userId]/manageAccount/Notifications";
import { getUser, logout } from "../../../../utils/supabase/actions";
import Link from "next/link";
import { Tab } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfileDashBoardBtn from "./_components/ProfileDashBoard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslations } from "next-intl";

export default function Profile() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");
  const [user, setUser] = useState<User | null>(null);
  const t = useTranslations("Profile");

  const userDashboard: Tab[] = [
    {
      title: t("orders"),
      component: <OrdersContent />,
      icon: <ShoppingBag width={18} height={18} strokeWidth={1} />,
    },

    {
      title: t("wishlist"),
      component: <WishlistContent />,
      icon: <Heart width={18} height={18} strokeWidth={1} />,
    },
    {
      title: t("paymentMethods"),
      component: <PaymentMethods />,
      icon: <CreditCard width={18} height={18} strokeWidth={1} />,
    },
    {
      title: t("myReviews"),
      component: <MyReviews />,
      icon: <Star width={18} height={18} strokeWidth={1} />,
    },
  ];

  const manageAccount: Tab[] = [
    {
      title: t("personalInfo"),
      component: <PersonalInfo />,
      icon: <UserRound width={18} height={18} strokeWidth={1} />,
    },
    {
      title: t("addresses"),
      component: <Addresses />,
      icon: <MapPin width={18} height={18} strokeWidth={1} />,
    },
    {
      title: t("notifications"),
      component: <Notifications />,
      icon: <Bell width={18} height={18} strokeWidth={1} />,
    },
  ];

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      setUser(userData);
    }
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;
  return (
    <div className="flex justify-center gap-8 w-full py-10">
      {/* Profile Dashboard */}
      <ProfileDashBoardBtn />

      {/* Small Screen Dashboard */}
      <div className="lg:hidden fixed z-50">
        <Sheet>
          <SheetTrigger asChild>
            <button className="fixed flex bottom-0 left-0 right-0 bg-[#222934] text-white py-6 border-t-[1px] border-opacity-20 border-white items-center justify-center gap-2">
              <span>
                <PanelLeft className="h-6 w-6" />
              </span>
              {t("accountMenu")}
            </button>
          </SheetTrigger>
          <SheetDescription></SheetDescription>
          <SheetContent
            side="left"
            className="dark:bg-[#181D25] dark:text-[white] mb-4"
          >
            <ScrollArea className="h-full">
              <SheetTitle className="flex items-center gap-2">
                <p className="text-lg border border-gray-900 dark:border-gray-400 p-2 size-12 rounded-full text-center">
                  <span className="text-2xl">
                    {user?.user_metadata.full_name?.charAt(0).toUpperCase()}
                  </span>
                </p>
                <p className="text-gray-900 dark:text-white">
                  {user?.user_metadata.full_name}
                </p>
              </SheetTitle>

              {/* User Dashboard */}
              <div className="space-y-2 my-4">
                {userDashboard.map((tab) => (
                  <Link
                    href={`?tab=${tab.title}`}
                    key={tab.title}
                    className={`flex items-center cursor-pointer gap-2 ml-2 p-1 rounded-lg hover:bg-gray-200${
                      activeTab === tab.title ? " bg-gray-200" : ""
                    }`}
                  >
                    <span className="dark:text-gray-500">{tab.icon}</span>
                    <span
                      key={tab.title}
                      className="text-gray-900 dark:text-gray-400 w-full text-start"
                    >
                      {tab.title}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Manage Account */}
              <span className="text-gray-900 dark:text-white font-semibold">
                {t("manageAccount")}
              </span>
              <div className="space-y-2 my-4">
                {manageAccount.map((tab) => (
                  <Link
                    href={`?tab=${tab.title}`}
                    key={tab.title}
                    className={`flex items-center cursor-pointer gap-2 ml-2 p-1 rounded-lg hover:bg-gray-200${
                      activeTab === tab.title ? " bg-gray-200" : ""
                    }`}
                  >
                    <span className="dark:text-gray-500">{tab.icon}</span>
                    <span
                      key={tab.title}
                      className="text-gray-900 dark:text-gray-400 w-full text-start"
                    >
                      {tab.title}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Customer Support */}
              <span className="text-gray-900 dark:text-white font-semibold">
                {t("customerService")}
              </span>
              <div className="flex flex-col gap-2 ml-2 my-4">
                <div className="flex items-center gap-2 p-1">
                  <span className="dark:text-gray-500">
                    <CircleHelp width={18} height={18} strokeWidth={1} />
                  </span>
                  <p className="text-gray-900 dark:text-gray-400 cursor-pointer hover:text-gray-400">
                    {t("helpCenter")}
                  </p>
                </div>
                <div className="flex items-center gap-2 p-1">
                  <span className="dark:text-gray-500">
                    <Info width={18} height={18} strokeWidth={1} />
                  </span>
                  <Link
                    href="/terms-and-conditions"
                    className="text-gray-900 dark:text-gray-400 cursor-pointer hover:text-gray-400"
                  >
                    {t("terms")}
                  </Link>
                </div>
              </div>

              {/* Logout */}
              <div className="text-gray-900 cursor-pointer dark:text-gray-400 hover:text-gray-400 mt-6 p-1">
                <span className="dark:text-gray-500">
                  <button
                    className="flex gap-2 items-center ml-2"
                    onClick={logout}
                  >
                    <LogOut className="h-5 w-5" strokeWidth={1} />
                    {t("logout")}
                  </button>
                </span>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {userDashboard.find((tab) => tab.title === activeTab)?.component ||
          manageAccount.find((tab) => tab.title === activeTab)?.component}
      </div>
    </div>
  );
}
