import {
  getProductsAutomotive,
  getProductsCosmetics,
  getProductsElectronics,
  getProductsHomeAndKitchen,
  getProductsMen,
  getProductsSportsAccessories,
  getProductsSunglasses,
  getProductsWomen,
} from "@/app/utils/products";
import { links } from "@/components/navbar/CategoriesLinks";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SortByCategoryBtnProps {
  handleCategoryClick: (category: string) => void;
  selectedCategories: string[];
  currentCategory: string;
}
export default function FilterBtnCategories({
  handleCategoryClick,
  selectedCategories,
  currentCategory,
}: SortByCategoryBtnProps) {
  // const products = getProductsMen();
  let products;
  if (currentCategory === "Men") {
    products = getProductsMen();
  } else if (currentCategory === "Women") {
    products = getProductsWomen();
  } else if (currentCategory === "Electronics") {
    products = getProductsElectronics();
  } else if (currentCategory === "Home & Kitchen") {
    products = getProductsHomeAndKitchen();
  } else if (currentCategory === "Cosmetics") {
    products = getProductsCosmetics();
  } else if (currentCategory === "Automotive") {
    products = getProductsAutomotive();
  } else if (currentCategory === "Sports Accessories") {
    products = getProductsSportsAccessories();
  } else if (currentCategory === "Sunglasses") {
    products = getProductsSunglasses();
  } else {
    // Handle other categories or default to one of the above
    products = getProductsMen(); // or getProductsWomen()
  }

  const productsByCategory = products.reduce(
    (acc: { [key: string]: number }, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category]++;
      return acc;
    },
    {}
  );
  const totalProducts = Object.values(productsByCategory).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 dark:text-white mt-10">
      <h2 className="text-start text-xl text-gray-700 dark:text-white font-semibold">
        Categories
      </h2>
      {links.map((link, index) => (
        <div key={index}>
          {link.name === currentCategory ? (
            <div
              key={index}
              className="relative flex flex-col items-start gap-2 mt-4"
            >
              {link.sublinks.map((sublink) => (
                <span
                  key={sublink.name}
                  className="flex items-center justify-between gap-2 p-2"
                  onClick={() => handleCategoryClick(sublink.sortLink || "")}
                >
                  <Checkbox
                    id={sublink.name}
                    key={sublink.name}
                    checked={selectedCategories.includes(
                      sublink.sortLink || ""
                    )}
                  />
                  <Label htmlFor={sublink.name}>{sublink.name}</Label>
                  <p className="text-sm text-gray-400">
                    (
                    {productsByCategory[sublink.sortLink || ""] ||
                      totalProducts}
                    )
                  </p>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
