import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PetsService } from './PetsService';
import { CreatePetDTO } from './dto/CreatePetDTO';
import { Pets } from './PetsEntity';
import { PetsSize } from '../common/enum/SizeType';
import { PetsGender } from '../common/enum/GenderType';
import { sortBy } from '../common/enum/SortBy';
import { PetsColor } from '../common/enum/ColorType';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async create(@Body() createPetDTO: CreatePetDTO): Promise<Pets> {
    return this.petsService.create(createPetDTO);
  }

  @Get()
  async findAll(
    @Query('limit') limit: number = 8,
    @Query('page') page: number = 1,
    @Query('orderBy') orderBy?: sortBy,
    @Query('gender') gender?: PetsGender,
    @Query('color') color?: PetsColor | PetsColor[],
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('size') size?: PetsSize,
  ): Promise<Pets[]> {
    return this.petsService.findAll(
      limit,
      page,
      orderBy,
      gender,
      color,
      minPrice,
      maxPrice,
      size,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pets | null> {
    return await this.petsService.findOne(id);
  }
}
