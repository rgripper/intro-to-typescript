export type Event = {
  id: string;
  name: string;
  type: string; // Movie, Concert, Cricket
  description: string;
  images: Image[];
  date: Date;
  priceRanges: PriceRange[];
}

type Image = {
  width: number;
  height: number;
}

type PriceRange = {
  currency: string; // USA, AUD, ...
  min: number;
  max: number;
}