import { PetsColor } from "./enum/ColorType";
import { PetsGender } from "./enum/GenderType";
import { PetsSize } from "./enum/SizeType";
import { PetsSpecie } from "./enum/SpecieType";

export type Pet = {
  id: number;
  name: string;
  price: string;
  sku: string;
  specie: PetsSpecie;
  gender: PetsGender;
  age: number;
  size: PetsSize;
  color: PetsColor;
  vaccinated: boolean;
  dewormed: boolean;
  certification: boolean;
  microchip: boolean;
  location: string;
  publishedDate: Date;
  additionalInformation: string;
  images: string[];
}