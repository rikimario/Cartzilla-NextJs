import { useState } from "react";
import getProductsMen from "./products";

enum SortOrder {
  Relevance = "relevance",
  Name = "name",
  Low = "low",
  High = "high",
}

const products = getProductsMen();

const [sort, setSort] = useState(products);
const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Relevance);

export const handleChange = (value: string) => {
  if (value === "low") {
    setSort((prev) => [...prev].sort((a, b) => a.price - b.price));
    setSortOrder(SortOrder.Low);
  } else if (value === "high") {
    setSort((prev) => [...prev].sort((a, b) => b.price - a.price));
    setSortOrder(SortOrder.High);
  } else if (value === "name") {
    setSort((prev) => [...prev].sort((a, b) => a.title.localeCompare(b.title)));
    setSortOrder(SortOrder.Name);
  } else if (value === "relevance") {
    setSort((prev) => [...prev].sort((a, b) => a.id - b.id));
    setSortOrder(SortOrder.Relevance);
  }
};
