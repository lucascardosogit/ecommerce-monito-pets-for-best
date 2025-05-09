import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts } from './ContactsEntity';
import { ContactsController } from './ContactsController';
import { ContactsService } from './ContactsService';

@Module({
  imports: [TypeOrmModule.forFeature([Contacts])],
  controllers: [ContactsController],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}
