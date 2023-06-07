export type SanityQueryResponse<T> = {
  query: string;
  result: T;
};

export type SanityDocument<T> = T & {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};
