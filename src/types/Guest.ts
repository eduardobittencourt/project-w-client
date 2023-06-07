import { SanityDocument } from "./Sanity";

export type Guest = SanityDocument<{
  code: string;
  guests: [
    {
      _type: "name";
      _key: string;
      name: string;
      confirmed: boolean;
    }
  ];
}>;
