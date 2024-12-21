import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { getProductsSportsAccessories, Product } from "@/app/utils/products";
import SpecialOffersCard from "./SpecialOffersCard";

export default function SpecialOffersList() {
  const products = getProductsSportsAccessories();

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
          {products.map((item: Product) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <SpecialOffersCard key={item.id} product={item} />
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
