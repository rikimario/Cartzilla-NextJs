"use client";
import React, { useEffect, useState } from "react";
import { getUser } from "../../../../utils/supabase/actions";
import { User } from "@supabase/supabase-js";
import OrdersContent from "./userDashboard/OrdersContent";
import WishlistContent from "./userDashboard/WishlistContent";
import PaymentMethods from "./userDashboard/PaymentMethods";
import MyReviews from "./userDashboard/MyReviews";
import PersonalInfo from "./manageAccount/PersonalInfo";
import Addresses from "./manageAccount/Addresses";
import Notifications from "./manageAccount/Notifications";
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

type Tab = {
  title: string;
  component: React.JSX.Element;
  icon?: React.JSX.Element;
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState<string>("Orders");
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
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center gap-2">
          <p className="hidden lg:block size-10 text-lg border border-gray-900 p-2 rounded-full text-center">
            {user?.email?.charAt(0).toUpperCase()}
          </p>
          <p>{user?.email}</p>
        </div>

        {/* User Dashboard */}
        {userDashboard.map((tab) => (
          <div
            key={tab.title}
            className={`flex items-center gap-2 ml-4 p-2 rounded-lg hover:bg-gray-200${
              tab.title === activeTab ? " bg-gray-200" : ""
            }`}
          >
            <span>{tab.icon}</span>
            <button
              onClick={() => setActiveTab(tab.title)}
              key={tab.title}
              className="text-gray-900 cursor-pointer w-full text-start"
            >
              {tab.title}
            </button>
          </div>
        ))}

        {/* Manage Account */}
        <span className="text-gray-900 font-semibold mt-2">Manage Account</span>
        {manageAccount.map((tab) => (
          <div
            key={tab.title}
            className={`flex items-center gap-2 ml-4 p-2 rounded-lg hover:bg-gray-200${
              tab.title === activeTab ? " bg-gray-200" : ""
            }`}
          >
            <span>{tab.icon}</span>
            <button
              onClick={() => setActiveTab(tab.title)}
              key={tab.title}
              className="text-gray-900 cursor-pointer w-full text-start"
            >
              {tab.title}
            </button>
          </div>
        ))}

        {/* Customer Support */}
        <span className="text-gray-900 font-semibold mt-2">
          Customer Service
        </span>
        <div className="flex flex-col gap-2 ml-4">
          <div className="flex items-center gap-2 p-2">
            <span>
              <CircleHelp width={18} height={18} strokeWidth={1} />
            </span>
            <p className="text-gray-900 cursor-pointer hover:text-gray-400">
              Help Center
            </p>
          </div>
          <div className="flex items-center gap-2 p-2">
            <span>
              <Info width={18} height={18} strokeWidth={1} />
            </span>
            <p className="text-gray-900 cursor-pointer hover:text-gray-400">
              Terms and Conditions
            </p>
          </div>
        </div>

        {/* Logout */}
        <div className="text-gray-900 cursor-pointer hover:text-gray-400 mt-6 p-2">
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
