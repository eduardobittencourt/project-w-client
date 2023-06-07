import { SanityDocument } from "./Sanity";

export type Gift = SanityDocument<{
  title: string;
  description: string;
  specifications: {
    key: string;
    value: string;
  }[];
  price: number;
  image: string;
  category: string;
  link: string;
  bought: string[];
}>;
