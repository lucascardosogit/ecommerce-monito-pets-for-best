// eslint-disable-next-line prettier/prettier
import { IsArray, IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { PetsColor } from '../../common/enum/ColorType';
import { PetsGender } from '../../common/enum/GenderType';
import { PetsSize } from '../../common/enum/SizeType';
import { PetsSpecie } from '../../common/enum/SpecieType';

export class CreatePetDTO {
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  sku: string;

  @IsEnum(PetsSpecie)
  specie: PetsSpecie;

  @IsEnum(PetsGender)
  gender: PetsGender;

  @IsNumber()
  age: number;

  @IsEnum(PetsSize)
  size: PetsSize;

  @IsEnum(PetsColor)
  color: PetsColor;

  @IsBoolean()
  vaccinated: boolean;

  @IsBoolean()
  dewormed: boolean;

  @IsBoolean()
  certification: boolean;

  @IsBoolean()
  microchip: boolean;

  @IsString()
  location: string;

  @IsDate()
  publishedDate: Date;

  @IsString()
  additionalInformation: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];
}
