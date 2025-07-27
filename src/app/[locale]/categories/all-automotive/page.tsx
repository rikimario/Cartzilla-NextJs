"use client";
import SortProductsBtn from "../../utils/SortingUtils/SortProductsBtn";
import { useEffect, useState } from "react";
import FilterBtnCategories from "../../utils/SortingUtils/FilterBtnCategories";
import FilterBtnPrice from "../../utils/SortingUtils/FilterBtnPrice";
import { getProducts } from "../../../../../utils/supabase/actions";
import { Product, SortOrder } from "@/lib/types";
import ProductsMain from "@/app/[locale]/utils/ProductsMain";
import Brands from "@/app/[locale]/utils/Brands";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Products");
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Relevance);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [value, setValue] = useState<[number, number]>([0, 40000]);

  const category: string[] = ["vehicle", "motorcycle"];

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = (await getProducts()).filter((product) =>
        category.includes(product.category)
      );
      setProducts(fetchedProducts);
      setSortedProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleSortedProductsChange = (newSortOrder: SortOrder) => {
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    if (!products.length) return;

    let updatedProducts = [...products];

    if (selectedCategories.length)
      updatedProducts = updatedProducts.filter((p) =>
        selectedCategories.includes(p.category)
      );

    if (selectedBrands.length)
      updatedProducts = updatedProducts.filter((p) =>
        selectedBrands.includes(p.brand?.toString() || "")
      );

    updatedProducts = updatedProducts.filter(
      (p) => p.price >= value[0] && p.price <= value[1]
    );

    setSortedProducts(sortProducts(updatedProducts, sortOrder));
  }, [selectedCategories, selectedBrands, value, sortOrder, products]);

  const sortProducts = (products: Product[], order: SortOrder) => {
    return [...products].sort((a, b) => {
      switch (order) {
        case SortOrder.Name:
          return a.title.localeCompare(b.title);
        case SortOrder.Low:
          return a.price - b.price;
        case SortOrder.High:
          return b.price - a.price;
        default:
          return a.product_id - b.product_id;
      }
    });
  };
  return (
    <div className="p-4 dark:bg-[#181D25]">
      <h1 className="text-4xl font-semibold mt-10">{t("automotive")}</h1>

      <SortProductsBtn
        handleSortedProductsChange={handleSortedProductsChange}
      />

      <div className="flex lg:gap-4 md:justify-start w-full">
        <div className="lg:block hidden">
          <FilterBtnCategories
            products={products}
            handleCategoryChange={setSelectedCategories}
            selectedCategories={selectedCategories}
          />
          <FilterBtnPrice
            products={products}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            values={value}
            setValue={setValue}
          />
          <Brands
            products={products}
            selectedBrands={selectedBrands}
            onBrandChange={setSelectedBrands}
          />
        </div>
        <div className="md:flex-1">
          <ProductsMain product={sortedProducts} />
        </div>
        {/* Mobile Filter */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="fixed flex bottom-0 left-0 right-0 bg-[#222934] text-white py-6 border-t-[1px] border-opacity-20 border-white items-center justify-center gap-2">
                <span>
                  <Filter className="h-6 w-6" />
                </span>
                Filters
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="dark:bg-[#181D25] dark:text-[white] mb-4"
            >
              <ScrollArea className="h-full">
                <SheetHeader>
                  <SheetTitle className="text-start text-xl">
                    Filters and sort
                  </SheetTitle>
                </SheetHeader>
                <FilterBtnCategories
                  products={products}
                  handleCategoryChange={setSelectedCategories}
                  selectedCategories={selectedCategories}
                />
                <FilterBtnPrice
                  products={products}
                  selectedCategories={selectedCategories}
                  selectedBrands={selectedBrands}
                  values={value}
                  setValue={setValue}
                />
                <Brands
                  products={products}
                  selectedBrands={selectedBrands}
                  onBrandChange={setSelectedBrands}
                />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
