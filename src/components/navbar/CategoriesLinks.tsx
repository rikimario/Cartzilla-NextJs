export const links: {
  name: string;
  submenu: boolean;
  href?: string;
  sublinks: {
    name: string;
    link: string;
    sortLink?: string;
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
        sortLink: "mens-shirts",
      },
      {
        name: "Mens Shoes",
        link: "/categories/all-men",
        sortLink: "mens-shoes",
      },
      {
        name: "Mens Watches",
        link: "/categories/all-men",
        sortLink: "mens-watches",
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
        sortLink: "tops",
      },
      {
        name: "Dresses",
        link: "/categories/all-women",
        sortLink: "womens-dresses",
      },
      {
        name: "Women Shoes",
        link: "/categories/all-women",
        sortLink: "womens-shoes",
      },
      {
        name: "Women Bags",
        link: "/categories/all-women",
        sortLink: "womens-bags",
      },
      {
        name: "Women Watches",
        link: "/categories/all-women",
        sortLink: "womens-watches",
      },
      {
        name: "Jewelry",
        link: "/categories/all-women",
        sortLink: "womens-jewellery",
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
        sortLink: "laptops",
      },
      {
        name: "Tablets",
        link: "/categories/all-electronics",
        sortLink: "tablets",
      },
      {
        name: "Smartphones",
        link: "/categories/all-electronics",
        sortLink: "smartphones",
      },
      {
        name: "Mobile Accessories",
        link: "/categories/all-electronics",
        sortLink: "mobile-accessories",
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
        sortLink: "furniture",
      },
      {
        name: "Kitchen",
        link: "/categories/all-groceries",
        sortLink: "kitchen",
      },
      {
        name: "Decorations",
        link: "/categories/all-groceries",
        sortLink: "decorations",
      },
      {
        name: "Groceries",
        link: "/categories/all-groceries",
        sortLink: "groceries",
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
        sortLink: "beauty",
      },
      {
        name: "Skin Care",
        link: "/categories/all-cosmetics",
        sortLink: "skin-care",
      },
      {
        name: "Fragrances",
        link: "/categories/all-cosmetics",
        sortLink: "fragrances",
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
        sortLink: "cars",
      },
      {
        name: "Motorcycles",
        link: "/categories/all-automotive",
        sortLink: "motorcycles",
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
        sortLink: "sports-accessories",
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
        sortLink: "sunglasses",
      },
    ],
  },
];
