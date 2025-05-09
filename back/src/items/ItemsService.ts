import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from './ItemsEntity';
import { CreateItemDTO } from './dto/CreateItemDTO';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items)
    private readonly itemsRepository: Repository<Items>,
  ) {}

  async create(createItemDto: CreateItemDTO): Promise<Items> {
    return this.itemsRepository.save(createItemDto);
  }

  async findAll(): Promise<Items[]> {
    return await this.itemsRepository.find();
  }

  async findOne(id: number): Promise<Items | null> {
    return await this.itemsRepository.findOneBy({ id });
  }
}
