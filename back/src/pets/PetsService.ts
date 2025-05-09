import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pets } from './PetsEntity';
import { CreatePetDTO } from './dto/CreatePetDTO';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets)
    private readonly petsRepository: Repository<Pets>,
  ) {}

  async create(createPetDto: CreatePetDTO): Promise<Pets> {
    return this.petsRepository.save(createPetDto);
  }

  async findAll(): Promise<Pets[]> {
    return await this.petsRepository.find();
  }

  async findOne(id: number): Promise<Pets | null> {
    return await this.petsRepository.findOneBy({ id });
  }
}
