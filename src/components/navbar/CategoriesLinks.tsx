// hooks/useCategoryLinks.ts
import { useTranslations } from "next-intl";

export function useCategoryLinks() {
  const t = useTranslations("Navigation");

  return [
    {
      name: t("men"),
      submenu: true,
      href: "/categories/all-men",
      sublinks: [
        {
          name: t("mensShirts"),
          link: "/categories/all-men",
          sortLink: "mens-shirts",
        },
        {
          name: t("mensShoes"),
          link: "/categories/all-men",
          sortLink: "mens-shoes",
        },
        {
          name: t("mensWatches"),
          link: "/categories/all-men",
          sortLink: "mens-watches",
        },
      ],
    },
    {
      name: t("women"),
      submenu: true,
      href: "/categories/all-women",
      sublinks: [
        { name: t("tops"), link: "/categories/all-women", sortLink: "tops" },
        {
          name: t("dresses"),
          link: "/categories/all-women",
          sortLink: "womens-dresses",
        },
        {
          name: t("womenShoes"),
          link: "/categories/all-women",
          sortLink: "womens-shoes",
        },
        {
          name: t("womenBags"),
          link: "/categories/all-women",
          sortLink: "womens-bags",
        },
        {
          name: t("womenWatches"),
          link: "/categories/all-women",
          sortLink: "womens-watches",
        },
        {
          name: t("jewelry"),
          link: "/categories/all-women",
          sortLink: "womens-jewellery",
        },
      ],
    },
    {
      name: t("electronics"),
      submenu: true,
      href: "/categories/all-electronics",
      sublinks: [
        {
          name: t("laptops"),
          link: "/categories/all-electronics",
          sortLink: "laptops",
        },
        {
          name: t("tablets"),
          link: "/categories/all-electronics",
          sortLink: "tablets",
        },
        {
          name: t("smartphones"),
          link: "/categories/all-electronics",
          sortLink: "smartphones",
        },
        {
          name: t("mobileAccessories"),
          link: "/categories/all-electronics",
          sortLink: "mobile-accessories",
        },
      ],
    },
    {
      name: t("homeKitchen"),
      submenu: true,
      href: "/categories/all-groceries",
      sublinks: [
        {
          name: t("furniture"),
          link: "/categories/all-groceries",
          sortLink: "furniture",
        },
        {
          name: t("kitchen"),
          link: "/categories/all-groceries",
          sortLink: "kitchen",
        },
        {
          name: t("decorations"),
          link: "/categories/all-groceries",
          sortLink: "decorations",
        },
        {
          name: t("groceries"),
          link: "/categories/all-groceries",
          sortLink: "groceries",
        },
      ],
    },
    {
      name: t("cosmetics"),
      submenu: true,
      href: "/categories/all-cosmetics",
      sublinks: [
        {
          name: t("beauty"),
          link: "/categories/all-cosmetics",
          sortLink: "beauty",
        },
        {
          name: t("skinCare"),
          link: "/categories/all-cosmetics",
          sortLink: "skin-care",
        },
        {
          name: t("fragrances"),
          link: "/categories/all-cosmetics",
          sortLink: "fragrances",
        },
      ],
    },
    {
      name: t("automotive"),
      submenu: true,
      href: "/categories/all-automotive",
      sublinks: [
        {
          name: t("cars"),
          link: "/categories/all-automotive",
          sortLink: "cars",
        },
        {
          name: t("motorcycles"),
          link: "/categories/all-automotive",
          sortLink: "motorcycles",
        },
      ],
    },
    {
      name: t("sportsAccessories"),
      submenu: true,
      href: "/categories/sports-accessories",
      sublinks: [
        {
          name: t("sportsAccessories"),
          link: "/categories/sports-accessories",
          sortLink: "sports-accessories",
        },
      ],
    },
    {
      name: t("sunglasses"),
      submenu: true,
      href: "/categories/sunglasses",
      sublinks: [
        {
          name: t("sunglasses"),
          link: "/categories/sunglasses",
          sortLink: "sunglasses",
        },
      ],
    },
  ];
}
