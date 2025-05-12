import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateItemDTO } from './dto/CreateItemDTO';
import { Items } from './ItemsEntity';
import { ItemsService } from './ItemsService';
import { sortBy } from '../common/enum/SortBy';
import { PetsSpecie } from '../common/enum/SpecieType';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() createItemDTO: CreateItemDTO): Promise<Items> {
    return this.itemsService.create(createItemDTO);
  }

  @Get()
  async findAll(
    @Query('limit') limit: number = 8,
    @Query('page') page: number = 1,
    @Query('orderBy') orderBy?: sortBy,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('forSpecie') forSpecie?: PetsSpecie,
  ): Promise<Items[] | null> {
    return this.itemsService.findAll(
      limit,
      page,
      orderBy,
      minPrice,
      maxPrice,
      forSpecie,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Items | null> {
    return await this.itemsService.findOne(id);
  }
}
