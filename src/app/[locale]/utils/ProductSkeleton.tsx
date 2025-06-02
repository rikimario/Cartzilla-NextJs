import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="relative flex flex-col text-center items-center gap-2 lg:min-w-[250px] pb-8 animate-pulse">
      <span className="hidden">Loading...</span>

      <Skeleton className="md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px]" />
      <div className="flex flex-col gap-2  w-full text-start p-2">
        <Skeleton className="h-4 w-full rounded" />
        <div className="flex items-center justify-between pt-4">
          <Skeleton className="h-4 w-1/2 rounded" />
          <Skeleton className="h-4 w-1/2 rounded" />
        </div>
      </div>
    </div>
  );
}
