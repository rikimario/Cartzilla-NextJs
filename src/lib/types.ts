export type Product = {
  // id: number;
  title: string;
  description: string;
  product_id: number;
  thumbnail: string;
  price: number;
  category: string;
  size?: string[];
  images: string[];
  brand?: string;
  rating: number;
  stock: number;
  reviews: [
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
  ];
  warrantyInformation: string;
  returnPolicy: string;
  quantity: number;
};

export enum SortOrder {
  Relevance = "relevance",
  Name = "name",
  Low = "low",
  High = "high",
}

export type Tab = {
  title: string;
  component: React.JSX.Element;
  icon?: React.JSX.Element;
};
