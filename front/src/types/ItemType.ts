import { PetsSpecie } from "./enum/SpecieType";

export type Item = {
  id: number;
  name: string;
  price: string;
  sku: string;
  forSpecie: PetsSpecie | null;
  product: string;
  size: string | null;
  additionalInformation: string;
  images: string[];
}