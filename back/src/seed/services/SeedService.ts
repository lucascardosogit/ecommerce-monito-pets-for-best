import { Injectable } from '@nestjs/common';
import { ItemsSeedService } from './ItemsSeedService';
import { PetsSeedService } from './PetsSeedService';

@Injectable()
export class SeedService {
  constructor(
    private readonly petsSeedService: PetsSeedService,
    private readonly itemsSeedService: ItemsSeedService,
  ) {}

  async seedGen() {
    await this.petsSeedService.seedPets();
    await this.itemsSeedService.seedItems();

    console.log('Seeds ready!');
  }
}
