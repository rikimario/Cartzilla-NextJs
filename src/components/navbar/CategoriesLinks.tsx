export const links: {
  name: string;
  submenu: boolean;
  sublinks: {
    name: string;
    link: string;
  }[];
}[] = [
  {
    name: "Men",
    submenu: true,
    sublinks: [
      {
        name: "Mens Shirts",
        link: "mens-shirts",
      },
      {
        name: "Mens Shoes",
        link: "mens-shoes",
      },
      {
        name: "Mens Watches",
        link: "mens-watches",
      },
      // {
      //   name: "All",
      //   link: "categories/all-men",
      // },
    ],
  },
  {
    name: "Women",
    submenu: true,
    sublinks: [
      {
        name: "Tops",
        link: "/women-tops",
      },
      {
        name: "Dresses",
        link: "/women-dresses",
      },
      {
        name: "Women Shoes",
        link: "/women-shoes",
      },
      {
        name: "Women Bags",
        link: "/women-bags",
      },
      {
        name: "Women Watches",
        link: "/women-watches",
      },
      {
        name: "Jewelry",
        link: "/women-jewelry",
      },
      {
        name: "All",
        link: "/categories/all-women",
      },
    ],
  },
  {
    name: "Electronics",
    submenu: true,
    sublinks: [
      {
        name: "Laptops",
        link: "/laptops",
      },
      {
        name: "Tablets",
        link: "/tablets",
      },
      {
        name: "Smartphones",
        link: "/smartphones",
      },
      {
        name: "Mobile Accessories",
        link: "/mobile-accessories",
      },
      {
        name: "All",
        link: "/categories/all-electronics",
      },
    ],
  },
  {
    name: "Home & Kitchen",
    submenu: true,
    sublinks: [
      {
        name: "Furniture",
        link: "/furniture",
      },
      {
        name: "Kitchen",
        link: "/kitchen",
      },
      {
        name: "Decorations",
        link: "/decorations",
      },
      {
        name: "Groceries",
        link: "/groceries",
      },
      {
        name: "All",
        link: "/categories/all-groceries",
      },
    ],
  },
  {
    name: "Cosmetics",
    submenu: true,
    sublinks: [
      {
        name: "Beauty",
        link: "/beauty",
      },
      {
        name: "Skin Care",
        link: "/skin-care",
      },
      {
        name: "Fragrances",
        link: "/fragrances",
      },
      {
        name: "All",
        link: "/categories/all-cosmetics",
      },
    ],
  },
  {
    name: "Automotive",
    submenu: true,
    sublinks: [
      {
        name: "Cars",
        link: "/cars",
      },
      {
        name: "Motorcycles",
        link: "/motorcycles",
      },
      {
        name: "All",
        link: "/categories/all-automotive",
      },
    ],
  },
];
