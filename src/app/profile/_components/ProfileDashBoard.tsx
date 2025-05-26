import { Tab } from "@/lib/types";
import { User } from "@supabase/supabase-js";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getUser } from "../../../../utils/supabase/actions";
import Link from "next/link";
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
import OrdersContent from "../[userId]/userDashboard/OrdersContent";
import WishlistContent from "../[userId]/userDashboard/WishlistContent";
import PaymentMethods from "../[userId]/userDashboard/PaymentMethods";
import MyReviews from "../[userId]/userDashboard/MyReviews";
import PersonalInfo from "../[userId]/manageAccount/PersonalInfo";
import Addresses from "../[userId]/manageAccount/Addresses";
import Notifications from "../[userId]/manageAccount/Notifications";

export default function ProfileDashBoard() {
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
    <div className="hidden lg:flex lg:flex-col gap-2 w-1/3 xl:w-1/4">
      <div className="flex items-center gap-2">
        <p className="text-lg border border-gray-900 dark:border-gray-400 p-2 size-12 rounded-full text-center">
          <span className="text-2xl">
            {user?.user_metadata.full_name?.charAt(0).toUpperCase()}
          </span>
        </p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
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
          <span className="dark:text-gray-500">{tab.icon}</span>
          <span
            key={tab.title}
            className="text-gray-900 dark:text-gray-400 w-full text-start"
          >
            {tab.title}
          </span>
        </Link>
      ))}

      {/* Manage Account */}
      <span className="text-gray-900 dark:text-white font-semibold mt-2">
        Manage Account
      </span>
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

      {/* Customer Support */}
      <span className="text-gray-900 dark:text-white font-semibold mt-2">
        Customer Service
      </span>
      <div className="flex flex-col gap-2 ml-2">
        <div className="flex items-center gap-2 p-1">
          <span className="dark:text-gray-500">
            <CircleHelp width={18} height={18} strokeWidth={1} />
          </span>
          <p className="text-gray-900 dark:text-gray-400 cursor-pointer hover:text-gray-400">
            Help Center
          </p>
        </div>
        <Link
          href="/terms-and-conditions"
          className="flex items-center gap-2 p-1"
        >
          <span className="dark:text-gray-500">
            <Info width={18} height={18} strokeWidth={1} />
          </span>
          <p className="text-gray-900 dark:text-gray-400 cursor-pointer hover:text-gray-400">
            Terms and Conditions
          </p>
        </Link>
      </div>

      {/* Logout */}
      <div className="text-gray-900 cursor-pointer dark:text-gray-400 hover:text-gray-400 mt-6 p-1">
        <span className="dark:text-gray-500">
          <LogoutBtn />
        </span>
      </div>
    </div>
  );
}
