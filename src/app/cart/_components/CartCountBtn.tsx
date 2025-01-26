import { Card } from "@/components/ui/card";
import { Product } from "@/lib/types";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export default function CartCountBtn({
  product,
  initialCount = product.quantity,
  onUpdateQuantity,
}: {
  product: Product;
  initialCount: number;
  onUpdateQuantity: (quantity: number) => void;
}) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
    onUpdateQuantity(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
    onUpdateQuantity(count - 1);
  };

  return (
    <div className="md:flex mr-10">
      <Card className="flex gap-4 items-center p-1 bg-inherit">
        <button
          className="disabled:opacity-40"
          onClick={handleClick2}
          disabled={count <= 1}
        >
          <Minus size={15} />
        </button>
        <p className="text-center">{count}</p>
        <button className="" onClick={handleClick}>
          <Plus size={15} />
        </button>
      </Card>
    </div>
  );
}
