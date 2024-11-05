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
    ],
  },
  {
    name: "Women",
    submenu: true,
    sublinks: [
      {
        name: "Tops",
        link: "tops",
      },
      {
        name: "Dresses",
        link: "womens-dresses",
      },
      {
        name: "Women Shoes",
        link: "womens-shoes",
      },
      {
        name: "Women Bags",
        link: "womens-bags",
      },
      {
        name: "Women Watches",
        link: "womens-watches",
      },
      {
        name: "Jewelry",
        link: "womens-jewellery",
      },
    ],
  },
  {
    name: "Electronics",
    submenu: true,
    sublinks: [
      {
        name: "Laptops",
        link: "laptops",
      },
      {
        name: "Tablets",
        link: "tablets",
      },
      {
        name: "Smartphones",
        link: "smartphones",
      },
      {
        name: "Mobile Accessories",
        link: "mobile-accessories",
      },
    ],
  },
  {
    name: "Home & Kitchen",
    submenu: true,
    sublinks: [
      {
        name: "Furniture",
        link: "furniture",
      },
      {
        name: "Kitchen",
        link: "kitchen-accessories",
      },
      {
        name: "Decorations",
        link: "home-decoration",
      },
      {
        name: "Groceries",
        link: "groceries",
      },
    ],
  },
  {
    name: "Cosmetics",
    submenu: true,
    sublinks: [
      {
        name: "Beauty",
        link: "beauty",
      },
      {
        name: "Skin Care",
        link: "skin-care",
      },
      {
        name: "Fragrances",
        link: "fragrances",
      },
    ],
  },
  {
    name: "Automotive",
    submenu: true,
    sublinks: [
      {
        name: "Cars",
        link: "vehicle",
      },
      {
        name: "Motorcycles",
        link: "motorcycle",
      },
    ],
  },
  {
    name: "Sports Accessories",
    submenu: true,
    sublinks: [
      {
        name: "Sports Accessories",
        link: "sports-accessories",
      },
    ],
  },
  {
    name: "Sunglasses",
    submenu: true,
    sublinks: [
      {
        name: "Sunglasses",
        link: "sunglasses",
      },
    ],
  },
];
