import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { PetsSpecie } from '../../common/enum/SpecieType';

export class CreateItemDTO {
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  sku: string;

  @IsOptional()
  @IsEnum(PetsSpecie)
  forSpecie?: PetsSpecie;

  @IsString()
  product: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsString()
  additionalInformation: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];
}
