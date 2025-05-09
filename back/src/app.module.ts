import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items/ItemsEntity';
import { Pets } from './pets/PetsEntity';
import { PetsModule } from './pets/PetsModule';

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
      entities: [Pets, Items],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pets, Items]),
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
