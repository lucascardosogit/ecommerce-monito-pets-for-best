import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items/ItemsEntity';
import { Pets } from './pets/PetsEntity';
import { PetsModule } from './pets/PetsModule';
import { ItemsModule } from './items/ItemsModule';
import { Contacts } from './contact/ContactsEntity';
import { SeedModule } from './seed/SeedModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Pets, Items, Contacts],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pets, Items, Contacts]),
    PetsModule,
    ItemsModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
