/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PetsService } from './PetsService';
import { CreatePetDTO } from './dto/CreatePetDTO';
import { Pets } from './PetsEntity';

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
    @Query('page') page: number = 0,
    @Query() filters: any,
  ): Promise<Pets[]> {
    return this.petsService.findAll(limit, page, ...filters);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pets | null> {
    return await this.petsService.findOne(id);
  }
}
