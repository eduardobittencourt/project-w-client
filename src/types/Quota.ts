import { SanityDocument } from "./Sanity";

export type Quota = SanityDocument<{
  title: string;
  description: string;
  price: number;
  image: string;
  bought: string[];
}>;
