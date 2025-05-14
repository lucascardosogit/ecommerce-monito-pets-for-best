import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from '../../items/ItemsEntity';
import { PetsSpecie } from '../../common/enum/SpecieType';

@Injectable()
export class ItemsSeedService {
  constructor(
    @InjectRepository(Items)
    private readonly itemsRepository: Repository<Items>,
  ) {}

  async seedItems() {
    const count = await this.itemsRepository.count();

    if (count > 0) {
      console.log('The database already has data for Items.');
      return;
    }

    const items = [
      {
        name: 'Premium Puppy Dry Food',
        price: '850.000 VND',
        sku: 'FOOD-DOG-001',
        forSpecie: PetsSpecie.DOG,
        product: 'Food',
        size: '3kg',
        additionalInformation:
          'High-quality puppy formula with balanced nutrition for optimal growth and development.',
        images: [
          'https://www.osps.lk/cdn/shop/files/38_c0965a45-7df1-4b10-9387-cf7d5613fc82.jpg?v=1715457394',
          'https://www.pedigree.in/files/styles/webp/public/2023-12/landing-hero-puppy-default.png.webp?VersionId=8nKdkPGUJJc2JOdJKs.EcOlTnuTrksG4&itok=7FDdUT_p',
        ],
      },
      {
        name: 'Cat Tree with Hammock',
        price: '1.790.000 VND',
        sku: 'FURN-CAT-001',
        forSpecie: PetsSpecie.CAT,
        product: 'Furniture',
        size: '120cm',
        additionalInformation:
          'Multi-level cat tree with scratching posts, platforms, and cozy hammock. Sturdy construction and plush covering.',
        images: [
          'https://www.cozycatfurniture.com/image/cache/catalog/large-green-cat-tree-for-large-cats-500x500.jpg',
          'https://meowgicians.com/cdn/shop/products/multi-level-wooden-cat-tree-with-hammock-cat-shape-enclosed-bed-391689.jpg?v=1710844008&width=1946',
        ],
      },
      {
        name: 'Automatic Pet Feeder',
        price: '1.250.000 VND',
        sku: 'ACC-GEN-001',
        forSpecie: null,
        product: 'Accessory',
        size: '2L',
        additionalInformation:
          "Programmable automatic feeder with timer and portion control. Perfect for scheduled feeding while you're away.",
        images: [
          'https://ipet-au.com/cdn/shop/products/PET-FEEDER-9L-WIFI-WH-07.jpg?v=1745815606',
          'https://ipet-au.com/cdn/shop/products/PET-FEEDER-6L-WIFI-WH-07.jpg?v=1745815611',
        ],
      },
      {
        name: 'Leather Dog Collar',
        price: '450.000 VND',
        sku: 'ACC-DOG-001',
        forSpecie: PetsSpecie.DOG,
        product: 'Accessory',
        size: 'M',
        additionalInformation:
          'Genuine leather collar with brass hardware. Durable, comfortable, and stylish for daily wear.',
        images: [
          'https://www.caninestyles.com/cdn/shop/products/CANINE_STYLES_CLASSIC_FLAT_LEATHER_DOG_COLLARS_RED_GREEN_BLACK_ORANGE_BROWN_METAL_1.jpg',
          'https://m.media-amazon.com/images/I/61lW8R+wO9L.jpg',
        ],
      },
      {
        name: 'Premium Clumping Cat Litter',
        price: '350.000 VND',
        sku: 'SUPP-CAT-001',
        forSpecie: PetsSpecie.CAT,
        product: 'Supply',
        size: '10L',
        additionalInformation:
          'Fast-clumping, dust-free formula with activated charcoal for superior odor control.',
        images: [
          'https://www.allpetsolutions.co.uk/cdn/shop/products/allpetsolutions-clumping-lavender-cat-litter-20l-allpetsolutions.jpg?v=1695646082',
          'https://www.allpetsolutions.co.uk/cdn/shop/products/allpetsolutions-low-dust-clumping-bentonite-cat-litter-20l-allpetsolutions-1_1024x1024.jpg?v=1695646163',
        ],
      },
      {
        name: 'Interactive Dog Puzzle Toy',
        price: '380.000 VND',
        sku: 'TOY-DOG-001',
        forSpecie: PetsSpecie.DOG,
        product: 'Toy',
        size: null,
        additionalInformation:
          'Mentally stimulating puzzle toy that dispenses treats. Helps prevent boredom and promotes problem-solving skills.',
        images: [
          'https://m.media-amazon.com/images/I/71JU+dHJosL.jpg',
          'https://m.media-amazon.com/images/I/61bT28f54FL.jpg',
        ],
      },
      {
        name: 'Pet Water Fountain',
        price: '650.000 VND',
        sku: 'ACC-GEN-002',
        forSpecie: null,
        product: 'Accessory',
        size: '2.5L',
        additionalInformation:
          'Circulating water fountain with replaceable carbon filter. Encourages pets to drink more water for better health.',
        images: [
          'https://m.media-amazon.com/images/I/71uR5y+6eJL.jpg',
          'https://m.media-amazon.com/images/I/710s70s44vL.jpg',
        ],
      },
      {
        name: 'Senior Cat Wet Food',
        price: '35.000 VND',
        sku: 'FOOD-CAT-001',
        forSpecie: PetsSpecie.CAT,
        product: 'Food',
        size: '85g',
        additionalInformation:
          'Premium wet food formulated for senior cats with added joint support and easy digestibility.',
        images: [
          'https://shop.royalcanin.ca/cdn/shop/files/rddiiukdwrk6jqgcjnsh.jpg?v=1687809916',
          'https://m.media-amazon.com/images/I/81r6gBgHcxL._AC_UF1000,1000_QL80_.jpg',
        ],
      },
    ];

    try {
      for (const item of items) {
        await this.itemsRepository.save(item);
      }
      console.log('The Seeding items was successful');
    } catch (error) {
      console.error('An error has occurred in seeding items: ', error);
    }
  }
}
