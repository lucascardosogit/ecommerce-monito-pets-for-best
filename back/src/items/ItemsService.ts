import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindManyOptions,
  FindOptionsWhere,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { Items } from './ItemsEntity';
import { CreateItemDTO } from './dto/CreateItemDTO';
import { Injectable } from '@nestjs/common';
import { sortBy } from 'src/common/enum/SortBy';
import { PetsSpecie } from 'src/common/enum/SpecieType';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items)
    private readonly itemsRepository: Repository<Items>,
  ) {}

  async create(createItemDto: CreateItemDTO): Promise<Items> {
    return this.itemsRepository.save(createItemDto);
  }

  async findAll(
    limit?: number,
    page?: number,
    orderBy?: sortBy,
    minPrice?: string,
    maxPrice?: string,
    forSpecie?: PetsSpecie,
  ): Promise<Items[]> {
    const where: FindOptionsWhere<Items> = {};

    if (maxPrice && minPrice) {
      where.price = Between(minPrice, maxPrice);
    } else if (minPrice) {
      where.price = MoreThanOrEqual(minPrice);
    } else if (maxPrice) {
      where.price = LessThanOrEqual(maxPrice);
    }

    const paginationOptions: FindManyOptions<Items> = {
      where: where,
      take: limit,
    };

    if (!limit || limit === undefined) {
      limit = 8;
    }

    if (page !== undefined) {
      paginationOptions.skip = (page - 1) * limit;
    }

    if (forSpecie) {
      where.forSpecie = forSpecie;
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

    return await this.itemsRepository.find(paginationOptions);
  }

  async findOne(id: number): Promise<Items | null> {
    return await this.itemsRepository.findOneBy({ id });
  }
}
