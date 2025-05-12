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
          'https://images.unsplash.com/photo-1589924691822-701767baabce',
          'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8',
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
          'https://images.unsplash.com/photo-1545249390-6bdfa286032f',
          'https://images.unsplash.com/photo-1591324535489-9c61789e0127',
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
          'https://images.unsplash.com/photo-1585846085435-0e2bd5c0dfd9',
          'https://images.unsplash.com/photo-1591116302387-58db066ced5f',
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
          'https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f',
          'https://images.unsplash.com/photo-1575300807933-e702f7e0c3d9',
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
          'https://images.unsplash.com/photo-1604542031658-5799ca5d7936',
          'https://images.unsplash.com/photo-1600847764808-a190ba40d72c',
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
          'https://images.unsplash.com/photo-1576201836106-db1758fd1c97',
          'https://images.unsplash.com/photo-1546421845-6471bdcf3edf',
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
          'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee',
          'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee',
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
          'https://images.unsplash.com/photo-1608039755401-742074f0548d',
          'https://images.unsplash.com/photo-1603360946369-dc9bb6258143',
        ],
      },
      {
        name: 'Orthopedic Dog Bed',
        price: '1.450.000 VND',
        sku: 'BED-DOG-001',
        forSpecie: PetsSpecie.DOG,
        product: 'Bedding',
        size: 'XL',
        additionalInformation:
          'Memory foam bed with supportive bolsters. Helps relieve joint pain for older dogs or those with arthritis.',
        images: [
          'https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d',
          'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
        ],
      },
      {
        name: 'Catnip Mice Toys (Set of 5)',
        price: '120.000 VND',
        sku: 'TOY-CAT-002',
        forSpecie: PetsSpecie.CAT,
        product: 'Toy',
        size: null,
        additionalInformation:
          'Set of 5 realistic fabric mice filled with premium catnip. Entices play and hunting behaviors.',
        images: [
          'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
          'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13',
        ],
      },
      {
        name: 'Dog Dental Chew Sticks',
        price: '195.000 VND',
        sku: 'TREAT-DOG-001',
        forSpecie: PetsSpecie.DOG,
        product: 'Treat',
        size: '300g',
        additionalInformation:
          'Dental care treats that help reduce plaque and tartar buildup. Fresh mint flavor for better breath.',
        images: [
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
          'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd',
        ],
      },
      {
        name: 'Self-Cleaning Litter Box',
        price: '3.200.000 VND',
        sku: 'ACC-CAT-001',
        forSpecie: PetsSpecie.CAT,
        product: 'Accessory',
        size: null,
        additionalInformation:
          'Automatic self-cleaning litter box with waste receptacle. Reduces odor and maintenance for busy pet owners.',
        images: [
          'https://images.unsplash.com/photo-1570824104453-508955ab713e',
          'https://images.unsplash.com/photo-1601758177266-bc599de87707',
        ],
      },
      {
        name: 'No-Pull Dog Harness',
        price: '520.000 VND',
        sku: 'ACC-DOG-002',
        forSpecie: PetsSpecie.DOG,
        product: 'Accessory',
        size: 'L',
        additionalInformation:
          'No-pull padded harness with reflective stitching for night visibility. Adjustable straps for perfect fit.',
        images: [
          'https://images.unsplash.com/photo-1600369671236-e74521d4b6ad',
          'https://images.unsplash.com/photo-1541687546006-898dab426732',
        ],
      },
      {
        name: 'Professional Grooming Brush',
        price: '260.000 VND',
        sku: 'GROOM-GEN-001',
        forSpecie: null,
        product: 'Grooming',
        size: null,
        additionalInformation:
          'Self-cleaning slicker brush that removes loose hair and prevents matting. Gentle on skin with ergonomic handle.',
        images: [
          'https://images.unsplash.com/photo-1559149251-e9a1dc89981c',
          'https://images.unsplash.com/photo-1599268706097-b895ecea09fd',
        ],
      },
      {
        name: 'Grain-Free Adult Dog Food',
        price: '950.000 VND',
        sku: 'FOOD-DOG-002',
        forSpecie: PetsSpecie.DOG,
        product: 'Food',
        size: '4kg',
        additionalInformation:
          'Grain-free formula with novel protein sources for dogs with sensitivities. Rich in omega fatty acids for coat health.',
        images: [
          'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8',
          'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd',
        ],
      },
      {
        name: 'Cat Window Perch',
        price: '420.000 VND',
        sku: 'ACC-CAT-002',
        forSpecie: PetsSpecie.CAT,
        product: 'Accessory',
        size: null,
        additionalInformation:
          'Window-mounted perch with strong suction cups. Provides cats with sunshine and entertainment watching outside.',
        images: [
          'https://images.unsplash.com/photo-1493916665398-143bdeabe500',
          'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7',
        ],
      },
      {
        name: 'Training Clicker Set',
        price: '150.000 VND',
        sku: 'TRAIN-DOG-001',
        forSpecie: PetsSpecie.DOG,
        product: 'Training',
        size: null,
        additionalInformation:
          'Professional training clicker with wrist strap and treat pouch. Perfect for positive reinforcement training.',
        images: [
          'https://images.unsplash.com/photo-1553069923-1b5749c290bc',
          'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
        ],
      },
      {
        name: 'Premium Pet Carrier',
        price: '1.850.000 VND',
        sku: 'ACC-GEN-003',
        forSpecie: null,
        product: 'Accessory',
        size: 'M',
        additionalInformation:
          'Airline-approved pet carrier with breathable mesh panels and comfortable padding. Folds flat for storage.',
        images: [
          'https://images.unsplash.com/photo-1549298222-1c31e8915347',
          'https://images.unsplash.com/photo-1535294435445-d7249524ef2e',
        ],
      },
      {
        name: 'Anti-Parasitic Pet Shampoo',
        price: '320.000 VND',
        sku: 'GROOM-GEN-002',
        forSpecie: null,
        product: 'Grooming',
        size: '500ml',
        additionalInformation:
          'Medicated shampoo that eliminates fleas and ticks while soothing irritated skin. Safe for regular use.',
        images: [
          'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
          'https://images.unsplash.com/photo-1567450133581-a2df0184b8c0',
        ],
      },
      {
        name: 'Interactive Laser Toy',
        price: '280.000 VND',
        sku: 'TOY-CAT-003',
        forSpecie: PetsSpecie.CAT,
        product: 'Toy',
        size: null,
        additionalInformation:
          "Automatic rotating laser toy with multiple patterns. Engages cats' hunting instincts for exercise and entertainment.",
        images: [
          'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13',
          'https://images.unsplash.com/photo-1615454299901-de13b71e13b3',
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
