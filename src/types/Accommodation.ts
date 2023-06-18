import { SanityDocument } from "./Sanity";

export type Accommodation = SanityDocument<{
  name: string;
  address: string;
  homeDistance: number;
  eventDistance: number;
  image: string;
  link: string;
}>;
