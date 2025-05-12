/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateItemDTO } from './dto/CreateItemDTO';
import { Items } from './ItemsEntity';
import { ItemsService } from './ItemsService';

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
    @Query('page') page: number = 0,
    @Query() filters: any,
  ): Promise<Items[] | null> {
    return this.itemsService.findAll(limit, page, ...filters);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Items | null> {
    return await this.itemsService.findOne(id);
  }
}
