"use client";
import React, { useEffect, useState } from "react";
import {
  Bell,
  CircleHelp,
  CreditCard,
  Heart,
  Info,
  MapPin,
  ShoppingBag,
  Star,
  UserRound,
} from "lucide-react";
import LogoutBtn from "@/components/navbar/LogoutBtn";
import { useSearchParams } from "next/navigation";
import { User } from "@supabase/supabase-js";
import OrdersContent from "./[userId]/userDashboard/OrdersContent";
import WishlistContent from "./[userId]/userDashboard/WishlistContent";
import PaymentMethods from "./[userId]/userDashboard/PaymentMethods";
import MyReviews from "./[userId]/userDashboard/MyReviews";
import PersonalInfo from "./[userId]/manageAccount/PersonalInfo";
import Addresses from "./[userId]/manageAccount/Addresses";
import Notifications from "./[userId]/manageAccount/Notifications";
import { getUser } from "../../../utils/supabase/actions";
import Link from "next/link";

type Tab = {
  title: string;
  component: React.JSX.Element;
  icon?: React.JSX.Element;
};

export default function Profile() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");
  const [user, setUser] = useState<User | null>(null);

  const userDashboard: Tab[] = [
    {
      title: "Orders",
      component: <OrdersContent />,
      icon: <ShoppingBag width={18} height={18} strokeWidth={1} />,
    },

    {
      title: "Wishlist",
      component: <WishlistContent />,
      icon: <Heart width={18} height={18} strokeWidth={1} />,
    },
    {
      title: "Payment Methods",
      component: <PaymentMethods />,
      icon: <CreditCard width={18} height={18} strokeWidth={1} />,
    },
    {
      title: "My Reviews",
      component: <MyReviews />,
      icon: <Star width={18} height={18} strokeWidth={1} />,
    },
  ];

  const manageAccount: Tab[] = [
    {
      title: "Personal Info",
      component: <PersonalInfo />,
      icon: <UserRound width={18} height={18} strokeWidth={1} />,
    },
    {
      title: "Addresses",
      component: <Addresses />,
      icon: <MapPin width={18} height={18} strokeWidth={1} />,
    },
    {
      title: "Notifications",
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

  return (
    <div className="flex justify-center gap-8 max-w-[89rem] w-full mx-auto py-10">
      <div className="flex flex-col gap-2 w-1/4">
        <div className="flex items-center gap-2">
          <p className="hidden lg:block text-lg border border-gray-900 p-2 size-12 rounded-full text-center">
            <span className="text-2xl">
              {user?.user_metadata.full_name?.charAt(0).toUpperCase()}
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-900">
            {user?.user_metadata.full_name}
          </p>
        </div>

        {/* User Dashboard */}
        {userDashboard.map((tab) => (
          <Link
            href={`?tab=${tab.title}`}
            key={tab.title}
            className={`flex items-center cursor-pointer gap-2 ml-2 p-1 rounded-lg hover:bg-gray-200${
              activeTab === tab.title ? " bg-gray-200" : ""
            }`}
          >
            <span>{tab.icon}</span>
            <span key={tab.title} className="text-gray-900 w-full text-start">
              {tab.title}
            </span>
          </Link>
        ))}

        {/* Manage Account */}
        <span className="text-gray-900 font-semibold mt-2">Manage Account</span>
        {manageAccount.map((tab) => (
          <Link
            href={`?tab=${tab.title}`}
            key={tab.title}
            className={`flex items-center cursor-pointer gap-2 ml-2 p-1 rounded-lg hover:bg-gray-200${
              activeTab === tab.title ? " bg-gray-200" : ""
            }`}
          >
            <span>{tab.icon}</span>
            <span key={tab.title} className="text-gray-900 w-full text-start">
              {tab.title}
            </span>
          </Link>
        ))}

        {/* Customer Support */}
        <span className="text-gray-900 font-semibold mt-2">
          Customer Service
        </span>
        <div className="flex flex-col gap-2 ml-2">
          <div className="flex items-center gap-2 p-1">
            <span>
              <CircleHelp width={18} height={18} strokeWidth={1} />
            </span>
            <p className="text-gray-900 cursor-pointer hover:text-gray-400">
              Help Center
            </p>
          </div>
          <div className="flex items-center gap-2 p-1">
            <span>
              <Info width={18} height={18} strokeWidth={1} />
            </span>
            <p className="text-gray-900 cursor-pointer hover:text-gray-400">
              Terms and Conditions
            </p>
          </div>
        </div>

        {/* Logout */}
        <div className="text-gray-900 cursor-pointer hover:text-gray-400 mt-6 p-1">
          <LogoutBtn />
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {userDashboard.find((tab) => tab.title === activeTab)?.component ||
          manageAccount.find((tab) => tab.title === activeTab)?.component}
      </div>
    </div>
  );
}
