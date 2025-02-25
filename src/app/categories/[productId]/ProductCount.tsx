import { Card } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";

export default function ProductCount({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  return (
    <div className="flex gap-4 text-xl font-medium">
      <Card className="flex items-center gap-8 p-4 bg-inherit">
        <button
          className="disabled:opacity-40"
          onClick={() => setCount(count - 1)}
          disabled={count <= 1}
        >
          <Minus />
        </button>
        <p className="w-8 text-center">{count}</p>
        <button className="" onClick={() => setCount(count + 1)}>
          <Plus />
        </button>
      </Card>
    </div>
  );
}
