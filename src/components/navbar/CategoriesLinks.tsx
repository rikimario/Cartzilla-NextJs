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
        link: "categories/all-men",
      },
      {
        name: "Mens Shoes",
        link: "categories/all-men",
      },
      {
        name: "Mens Watches",
        link: "categories/all-men",
      },
    ],
  },
  {
    name: "Women",
    submenu: true,
    sublinks: [
      {
        name: "Tops",
        link: "categories/all-women",
      },
      {
        name: "Dresses",
        link: "categories/all-women",
      },
      {
        name: "Women Shoes",
        link: "categories/all-women",
      },
      {
        name: "Women Bags",
        link: "categories/all-women",
      },
      {
        name: "Women Watches",
        link: "categories/all-women",
      },
      {
        name: "Jewelry",
        link: "categories/all-women",
      },
    ],
  },
  {
    name: "Electronics",
    submenu: true,
    sublinks: [
      {
        name: "Laptops",
        link: "categories/all-electronics",
      },
      {
        name: "Tablets",
        link: "categories/all-electronics",
      },
      {
        name: "Smartphones",
        link: "categories/all-electronics",
      },
      {
        name: "Mobile Accessories",
        link: "categories/all-electronics",
      },
    ],
  },
  {
    name: "Home & Kitchen",
    submenu: true,
    sublinks: [
      {
        name: "Furniture",
        link: "categories/all-groceries",
      },
      {
        name: "Kitchen",
        link: "categories/all-groceries",
      },
      {
        name: "Decorations",
        link: "categories/all-groceries",
      },
      {
        name: "Groceries",
        link: "categories/all-groceries",
      },
    ],
  },
  {
    name: "Cosmetics",
    submenu: true,
    sublinks: [
      {
        name: "Beauty",
        link: "categories/all-cosmetics",
      },
      {
        name: "Skin Care",
        link: "categories/all-cosmetics",
      },
      {
        name: "Fragrances",
        link: "categories/all-cosmetics",
      },
    ],
  },
  {
    name: "Automotive",
    submenu: true,
    sublinks: [
      {
        name: "Cars",
        link: "categories/all-automotive",
      },
      {
        name: "Motorcycles",
        link: "categories/all-automotive",
      },
    ],
  },
  {
    name: "Sports Accessories",
    submenu: true,
    sublinks: [
      {
        name: "Sports Accessories",
        link: "categories/sports-accessories",
      },
    ],
  },
  {
    name: "Sunglasses",
    submenu: true,
    sublinks: [
      {
        name: "Sunglasses",
        link: "categories/sunglasses",
      },
    ],
  },
];
