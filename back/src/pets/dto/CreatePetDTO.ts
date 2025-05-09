// eslint-disable-next-line prettier/prettier
import { IsArray, IsBoolean, IsDate, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PetsGender } from 'src/common/enum/GenderType';
import { PetsSize } from 'src/common/enum/SizeType';
import { PetSpecie } from 'src/common/enum/SpecieType';

export class CreatePetDTO {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  sku: string;

  @IsEnum({ type: 'enum', enum: PetSpecie })
  specie: PetSpecie;

  @IsEnum(PetsGender)
  gender: PetsGender;

  @IsNumber()
  age: number;

  @IsEnum(PetsSize)
  size: PetsSize;

  @IsString()
  color: string;

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
