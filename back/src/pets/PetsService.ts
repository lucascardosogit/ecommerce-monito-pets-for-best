import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindManyOptions,
  FindOptionsWhere,
  In,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { Pets } from './PetsEntity';
import { CreatePetDTO } from './dto/CreatePetDTO';
import { Injectable } from '@nestjs/common';
import { PetsGender } from 'src/common/enum/GenderType';
import { PetsSize } from 'src/common/enum/SizeType';
import { PetsColor } from 'src/common/enum/ColorType';
import { sortBy } from 'src/common/enum/SortBy';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets)
    private readonly petsRepository: Repository<Pets>,
  ) {}

  async create(createPetDto: CreatePetDTO): Promise<Pets> {
    return this.petsRepository.save(createPetDto);
  }

  async findAll(
    limit?: number,
    page?: number,
    orderBy?: sortBy,
    gender?: PetsGender,
    color?: PetsColor | PetsColor[],
    minPrice?: string,
    maxPrice?: string,
    size?: PetsSize,
  ): Promise<Pets[]> {
    const where: FindOptionsWhere<Pets> = {};

    if (gender) {
      where.gender = gender;
    }

    if (color) {
      if (Array.isArray(color)) {
        where.color = In(color);
      } else {
        where.color = color;
      }
    }

    if (maxPrice && minPrice) {
      where.price = Between(minPrice, maxPrice);
    } else if (minPrice) {
      where.price = MoreThanOrEqual(minPrice);
    } else if (maxPrice) {
      where.price = LessThanOrEqual(maxPrice);
    }

    if (size) {
      where.price = size;
    }

    const paginationOptions: FindManyOptions<Pets> = {
      where: where,
      take: limit,
    };

    if (!limit || limit === undefined) {
      limit = 8;
    }

    if (page !== undefined) {
      paginationOptions.skip = (page - 1) * limit;
    }

    switch (orderBy) {
      case sortBy.ATOZ:
        paginationOptions.order = { name: 'ASC' };
        break;
      case sortBy.ZTOA:
        paginationOptions.order = { name: 'DESC' };
        break;
      case sortBy.MINTOMAX:
        paginationOptions.order = { price: 'ASC' };
        break;
      case sortBy.MAXTOMIN:
        paginationOptions.order = { price: 'DESC' };
        break;
      default:
        paginationOptions.order = { id: 'DESC' };
        break;
    }

    return await this.petsRepository.find(paginationOptions);
  }

  async findOne(id: number): Promise<Pets | null> {
    return await this.petsRepository.findOneBy({ id });
  }
}
