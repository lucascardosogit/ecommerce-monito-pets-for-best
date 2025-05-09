// eslint-disable-next-line prettier/prettier
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PetSpecie } from 'src/common/enum/SpecieType';

export class CreateItemDTO {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  sku: string;

  @IsEnum({ type: 'enum', enum: PetSpecie })
  forSpecie: PetSpecie;

  @IsString()
  product: string;

  @IsString()
  size: string;

  @IsOptional()
  @IsString()
  additionalInformation?: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];
}
