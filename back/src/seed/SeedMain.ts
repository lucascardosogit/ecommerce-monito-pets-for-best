import { NestFactory } from '@nestjs/core';
import { SeedModule } from './SeedModule';
import { SeedService } from './services/SeedService';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeedModule);
  const seedService = app.get(SeedService);
  await seedService.seedGen();
  await app.close();
}

bootstrap().catch((error) => {
  console.error('An error has occurred in seeding: ', error);
});
