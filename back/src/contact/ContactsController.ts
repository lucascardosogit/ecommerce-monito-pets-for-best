import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactsService } from './ContactsService';
import { CreateContactDTO } from './dto/CreateContactDTO';
import { Contacts } from './ContactsEntity';

@Controller('contact')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDTO): Promise<Contacts> {
    return this.contactService.create(createContactDto);
  }

  @Get()
  async findAll(): Promise<Contacts[] | null> {
    return this.contactService.findAll();
  }
}
