import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

export default function Notifications() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        Notifications
      </h1>

      <div className="py-4 space-y-6">
        <div className="flex space-x-4">
          <Switch className="mt-1" id="exclusive-offers" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="exclusive-offers"
            >
              Exclusive offers
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              Receive alerts about exclusive discounts, promotions, and special
              offers tailored just for you.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Switch className="mt-1" id="order-updates" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="order-updates"
            >
              Order updates
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              Stay informed about the status of your orders, including
              confirmations, shipping updates, and delivery notifications.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Switch className="mt-1" id="product-recommendations" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="product-recommendations"
            >
              Product recommendations
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              Get personalized recommendations based on your browsing and
              purchase history to discover new products you'll love.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Switch className="mt-1" id="restock-notifications" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="restock-notifications"
            >
              Restock notifications
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              Be the first to know when out-of-stock items are back in
              inventory, ensuring you never miss out on your favorite products.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Switch className="mt-1" id="event-reminders" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="event-reminders"
            >
              Event reminders
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              Receive reminders about upcoming sales events, flash sales, or
              product launches to make sure you're always in the loop.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Switch className="mt-1" id="account-security-alerts" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="account-security-alerts"
            >
              Account security alerts
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              Receive notifications about any suspicious account activity or
              changes to your login credentials for enhanced security.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Switch className="mt-1" id="customer-support-updates" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="customer-support-updates"
            >
              Customer support updates
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              Get updates on any inquiries or support tickets you've submitted,
              ensuring timely resolution of any issues.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-gray-700 mt-8 pb-2 dark:text-white">
          Communication channels
        </h2>

        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center gap-2">
            <Checkbox id="sms" />
            <Label className="text-gray-500" htmlFor="sms">
              SMS
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="messages-in-whatsApp" />
            <Label className="text-gray-500" htmlFor="messages-in-whatsApp">
              Messages in WhatsApp
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="email" />
            <Label className="text-gray-500" htmlFor="email">
              Email
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="app-push-notifications" />
            <Label className="text-gray-500" htmlFor="app-push-notifications">
              App push notifications
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
