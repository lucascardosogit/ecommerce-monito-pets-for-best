import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './ItemsEntity';
import { Module } from '@nestjs/common';
import { ItemsController } from './ItemsController';
import { ItemsService } from './ItemsService';

@Module({
  imports: [TypeOrmModule.forFeature([Items])],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class PetsModule {}
