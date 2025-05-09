import { InjectRepository } from '@nestjs/typeorm';
import { Contacts } from './ContactsEntity';
import { Repository } from 'typeorm';
import { CreateContactDTO } from './dto/CreateContactDTO';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contacts)
    private readonly contactsRepository: Repository<Contacts>,
  ) {}

  async create(createContactDto: CreateContactDTO): Promise<Contacts> {
    return this.contactsRepository.save(createContactDto);
  }

  async findAll(): Promise<Contacts[]> {
    return await this.contactsRepository.find();
  }
}
