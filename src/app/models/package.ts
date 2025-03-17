export interface Package {
  name: string;
  price?: number;
  discount?: number,
  // discountName?: string,
  description: string;
  bullets: string[];
}
