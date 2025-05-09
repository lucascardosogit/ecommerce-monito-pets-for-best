import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  async findAll(): Promise<Pets[]> {
    return this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pets | null> {
    return await this.petsService.findOne(id);
  }
}
