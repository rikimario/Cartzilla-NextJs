import { Product } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import SpecialOffersCard from "./SpecialOffersCard";
import { useEffect, useState } from "react";
import { getProducts } from "../../../utils/supabase/actions";

export default function SpecialOffersList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative p-4 lg:px-10"
      >
        <CarouselContent>
          {products.slice(137, 153).map((item) => (
            <CarouselItem
              key={item.product_id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <SpecialOffersCard key={item.product_id} product={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute text-gray-900 dark:text-white bottom-[-20px] left-1/2">
          <CarouselPrevious className="dark:bg-[#181D25]" />
          <CarouselNext className="dark:bg-[#181D25]" />
        </div>
      </Carousel>
    </>
  );
}
