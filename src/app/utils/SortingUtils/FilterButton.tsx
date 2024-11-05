import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import FilterBtnCategories from "./FilterBtnCategories";
import FilterBtnPrice from "./FilterBtnPrice";
import FilterBtnBrands from "../../categories/all-men/MenBrands";
import {
  getProductsAutomotive,
  getProductsCosmetics,
  getProductsElectronics,
  getProductsHomeAndKitchen,
  getProductsMen,
  getProductsSportsAccessories,
  getProductsSunglasses,
  getProductsWomen,
} from "../products";

interface FilterButtonMenProps {
  handleCategoryClick: (category: string) => void;
  selectedCategories: string[];
  values: [number, number];
  setValue: (newValue: [number, number]) => void;
  onChange: (values: [number, number]) => void;
  handleBrandClick: (brand: string) => void;
  selectedBrands: string[];
  currentCategory: string;
}
export default function FilterButton({
  handleCategoryClick,
  selectedCategories,
  values,
  setValue,
  onChange,
  handleBrandClick,
  selectedBrands,
  currentCategory,
}: FilterButtonMenProps) {
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
  return (
    <>
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
            {/* Categories */}
            <FilterBtnCategories
              handleCategoryClick={handleCategoryClick}
              selectedCategories={selectedCategories}
              currentCategory={currentCategory}
            />
            {/* Price */}
            <FilterBtnPrice
              values={values}
              setValue={setValue}
              onChange={onChange}
            />
            {/* Brands */}
            <FilterBtnBrands
              handleBrandClick={handleBrandClick}
              selectedBrands={selectedBrands}
              currentCategory={currentCategory}
            />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
