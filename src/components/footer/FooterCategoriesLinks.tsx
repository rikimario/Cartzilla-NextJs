import { useTranslations } from "next-intl";

export function footerLinks() {
  const t = useTranslations("FooterLinks");
  return [
    {
      name: t("mansTShirts"),
      link: "/man-t-shirts",
    },
    {
      name: t("mansShoes"),
      link: "/man-shoes",
    },
    {
      name: t("mansWatches"),
      link: "/man-watches",
    },

    {
      name: t("tops"),
      link: "/women-tops",
    },
    {
      name: t("dresses"),
      link: "/women-dresses",
    },
    {
      name: t("womenShoes"),
      link: "/women-shoes",
    },
    {
      name: t("womenBags"),
      link: "/women-bags",
    },
    {
      name: t("womenWatches"),
      link: "/women-watches",
    },
    {
      name: t("jewelry"),
      link: "/women-jewelry",
    },

    {
      name: t("laptops"),
      link: "/laptops",
    },
    {
      name: t("tablets"),
      link: "/tablets",
    },
    {
      name: t("smartphones"),
      link: "/smartphones",
    },
    {
      name: t("mobileAccessories"),
      link: "/mobile-accessories",
    },

    {
      name: t("furniture"),
      link: "/furniture",
    },
    {
      name: t("kitchen"),
      link: "/kitchen",
    },
    {
      name: t("decorations"),
      link: "/decorations",
    },
    {
      name: t("groceries"),
      link: "/groceries",
    },

    {
      name: t("beauty"),
      link: "/beauty",
    },
    {
      name: t("skinCare"),
      link: "/skin-care",
    },
    {
      name: t("fragrances"),
      link: "/fragrances",
    },

    {
      name: t("cars"),
      link: "/cars",
    },
    {
      name: t("motorcycles"),
      link: "/motorcycles",
    },
    {
      name: t("sportsAccessories"),
      link: "/sports-accessories",
    },
    {
      name: t("sunglasses"),
      link: "/sunglasses",
    },
  ];
}
