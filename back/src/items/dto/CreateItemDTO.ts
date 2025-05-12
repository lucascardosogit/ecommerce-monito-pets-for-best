// eslint-disable-next-line prettier/prettier
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { PetsSpecie } from 'src/common/enum/SpecieType';

export class CreateItemDTO {
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  sku: string;

  @IsEnum({ type: 'enum', enum: PetsSpecie })
  forSpecie: PetsSpecie;

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
