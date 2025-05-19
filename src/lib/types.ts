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

export interface Cards {
  id: string;
  card_number: string;
  name_on_card: string;
  expiry_date: string;
  brand: string;
  cvc: string;
}

export interface PersonalInformation {
  id: string;
  first_name: string;
  last_name: string;
  language: string;
  date_of_birth: Date;
}

export interface ContactInformation {
  id: string;
  email: string;
  phone: string;
}

export interface AddressInfo {
  id: string;
  country: string;
  city: string;
  zip: string;
  address: string;
}
