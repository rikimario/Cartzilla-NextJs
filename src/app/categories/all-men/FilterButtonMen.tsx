import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Filter } from "lucide-react";
import { links } from "@/components/navbar/CategoriesLinks";
import Link from "next/link";

export default function FilterButtonMen() {
  // const [categoriesMen, setCategoriesMen] = useState();

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/categories/men")
  //     .then((res) => res.json())
  //     .then((data) => setCategoriesMen(data));
  // }, []);

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
          className="dark:bg-[#181D25] dark:text-[white]"
        >
          <ScrollArea className="h-screen">
            <SheetHeader>
              <SheetTitle className="text-start text-xl">
                Filters and sort
              </SheetTitle>
            </SheetHeader>
            <div className="p-6 border border-gray-200 rounded-xl text-gray-700 mt-6">
              <h2 className="text-start text-xl text-gray-700 font-semibold">
                Categories
              </h2>
              {links.map((link) => (
                <>
                  {link.name === "Men" ? (
                    <div className="relative flex flex-col items-start gap-2 mt-4">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          className="flex items-center justify-between gap-2 p-2"
                          href={sublink.link}
                        >
                          {sublink.name}
                          <span>
                            <ChevronRight className=" h-4 w-4" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
