export const links: {
  name: string;
  submenu: boolean;
  href?: string;
  sublinks: {
    name: string;
    link: string;
  }[];
}[] = [
  {
    name: "Men",
    submenu: true,
    href: "/categories/all-men",
    sublinks: [
      {
        name: "Mens Shirts",
        link: "/categories/all-men",
      },
      {
        name: "Mens Shoes",
        link: "/categories/all-men",
      },
      {
        name: "Mens Watches",
        link: "/categories/all-men",
      },
    ],
  },
  {
    name: "Women",
    submenu: true,
    href: "/categories/all-women",
    sublinks: [
      {
        name: "Tops",
        link: "/categories/all-women",
      },
      {
        name: "Dresses",
        link: "/categories/all-women",
      },
      {
        name: "Women Shoes",
        link: "/categories/all-women",
      },
      {
        name: "Women Bags",
        link: "/categories/all-women",
      },
      {
        name: "Women Watches",
        link: "/categories/all-women",
      },
      {
        name: "Jewelry",
        link: "/categories/all-women",
      },
    ],
  },
  {
    name: "Electronics",
    submenu: true,
    href: "/categories/all-electronics",
    sublinks: [
      {
        name: "Laptops",
        link: "/categories/all-electronics",
      },
      {
        name: "Tablets",
        link: "/categories/all-electronics",
      },
      {
        name: "Smartphones",
        link: "/categories/all-electronics",
      },
      {
        name: "Mobile Accessories",
        link: "/categories/all-electronics",
      },
    ],
  },
  {
    name: "Home & Kitchen",
    submenu: true,
    href: "/categories/all-groceries",
    sublinks: [
      {
        name: "Furniture",
        link: "/categories/all-groceries",
      },
      {
        name: "Kitchen",
        link: "/categories/all-groceries",
      },
      {
        name: "Decorations",
        link: "/categories/all-groceries",
      },
      {
        name: "Groceries",
        link: "/categories/all-groceries",
      },
    ],
  },
  {
    name: "Cosmetics",
    submenu: true,
    href: "/categories/all-cosmetics",
    sublinks: [
      {
        name: "Beauty",
        link: "/categories/all-cosmetics",
      },
      {
        name: "Skin Care",
        link: "/categories/all-cosmetics",
      },
      {
        name: "Fragrances",
        link: "/categories/all-cosmetics",
      },
    ],
  },
  {
    name: "Automotive",
    submenu: true,
    href: "/categories/all-automotive",
    sublinks: [
      {
        name: "Cars",
        link: "/categories/all-automotive",
      },
      {
        name: "Motorcycles",
        link: "/categories/all-automotive",
      },
    ],
  },
  {
    name: "Sports Accessories",
    submenu: true,
    href: "/categories/sports-accessories",
    sublinks: [
      {
        name: "Sports Accessories",
        link: "/categories/sports-accessories",
      },
    ],
  },
  {
    name: "Sunglasses",
    submenu: true,
    href: "/categories/sunglasses",
    sublinks: [
      {
        name: "Sunglasses",
        link: "/categories/sunglasses",
      },
    ],
  },
];
