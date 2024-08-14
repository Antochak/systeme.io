export type ProductType = {
  id: number;
  name: string;
  options: {
    size: string;
    amount: number;
  };
  active: boolean;
  createdAt: string;
};

export type PricePlanType = {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt?: string;
};

export type PageType = {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
};
