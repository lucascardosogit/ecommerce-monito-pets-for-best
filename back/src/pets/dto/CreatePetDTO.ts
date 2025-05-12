// eslint-disable-next-line prettier/prettier
import { IsArray, IsBoolean, IsDate, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PetsColor } from 'src/common/enum/ColorType';
import { PetsGender } from 'src/common/enum/GenderType';
import { PetsSize } from 'src/common/enum/SizeType';
import { PetsSpecie } from 'src/common/enum/SpecieType';

export class CreatePetDTO {
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  sku: string;

  @IsEnum({ type: 'enum', enum: PetsSpecie })
  specie: PetsSpecie;

  @IsEnum(PetsGender)
  gender: PetsGender;

  @IsNumber()
  age: number;

  @IsEnum(PetsSize)
  size: PetsSize;

  @IsEnum({ type: 'enum', enum: PetsColor })
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

  @IsOptional()
  @IsString()
  additionalInformation?: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];
}
