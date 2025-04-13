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
  reviews: Review[];
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

export type Orders = {
  order_id: number;
  quantity: string;
  order_total: number;
  delivery_date: string;
  address: string;
  city: string;
  payment_method: string;
  created_at: string;
  products: [
    {
      product_id: number;
      title: string;
      price: number;
      thumbnail: string;
      size: string;
      quantity: number;
    }
  ];
};

export interface Review {
  user_id?: string;
  product_id: number;
  reviewerName: string;
  reviewerEmail: string;
  productImage: string;
  productName: string;
  rating: number;
  comment: string;
  date: string;
}
