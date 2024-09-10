import getProductsMen from "@/app/utils/products";
import { links } from "@/components/navbar/CategoriesLinks";

interface SortByCategoryBtnProps {
  handleCategoryClick: (category: string) => void;
}
export default function FilterBtnCategories({
  handleCategoryClick,
}: SortByCategoryBtnProps) {
  const products = getProductsMen();
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
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 mt-6">
      <h2 className="text-start text-xl text-gray-700 font-semibold">
        Categories
      </h2>
      {links.map((link) => (
        <>
          {link.name === "Men" ? (
            <div className="relative flex flex-col items-start gap-2 mt-4">
              {link.sublinks.map((sublink) => (
                <button
                  key={sublink.name}
                  className="flex items-center justify-between gap-2 p-2"
                  onClick={() => handleCategoryClick(sublink.link)}
                >
                  {sublink.name}

                  <p className="text-sm text-gray-400">
                    ({productsByCategory[sublink.link] || totalProducts})
                  </p>
                </button>
              ))}
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
