import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTranslations } from "next-intl";
import React from "react";

export default function Notifications() {
  const t = useTranslations("Profile");
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        {t("notifications")}
      </h1>

      <div className="py-4 space-y-6">
        <div className="flex space-x-4">
          <Switch className="mt-1" id="exclusive-offers" />
          <div className="space-y-2">
            <Label
              className="text-gray-900 dark:text-white text-lg font-semibold"
              htmlFor="exclusive-offers"
            >
              {t("exclusiveOffers")}
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              {t("exclusiveOffersDescription")}
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
              {t("orderUpdates")}
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              {t("orderUpadatesDescription")}
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
              {t("productRecommendations")}
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              {t("productRecommendationsDescription")}
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
              {t("restockNotifications")}
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              {t("restockNotificationsDescription")}
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
              {t("eventReminders")}
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              {t("eventRemindersDescription")}{" "}
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
              {t("accSecurityAlerts")}
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              {t("accSecurityAlertsDescription")}
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
              {t("customerSupportUpdates")}
            </Label>
            <p className="text-gray-600 dark:text-gray-400">
              {t("customerSupportUpdatesDescription")}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-gray-700 mt-8 pb-2 dark:text-white">
          {t("comunicationChannels")}
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
              {t("messagesInWhatsApp")}
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
              {t("appPushNotifications")}
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
