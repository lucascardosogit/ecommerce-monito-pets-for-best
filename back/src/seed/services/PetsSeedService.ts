import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetsColor } from '../../common/enum/ColorType';
import { PetsGender } from '../../common/enum/GenderType';
import { PetsSize } from '../../common/enum/SizeType';
import { PetsSpecie } from '../../common/enum/SpecieType';
import { Pets } from '../../pets/PetsEntity';
import { Repository } from 'typeorm';

@Injectable()
export class PetsSeedService {
  constructor(
    @InjectRepository(Pets)
    private readonly petsRepository: Repository<Pets>,
  ) {}

  async seedPets() {
    const count = await this.petsRepository.count();

    if (count > 0) {
      console.log('The database already has data for pets.');
      return;
    }

    const pets = [
      {
        name: 'Golden Retriever Puppy',
        price: '25.000.000 VND',
        sku: 'DOG-GLD-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 3,
        size: PetsSize.MEDIUM,
        color: PetsColor.APRICOT,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Hanoi',
        publishedDate: new Date('2025-01-15'),
        additionalInformation:
          'Friendly and playful Golden Retriever puppy from champion bloodlines. Great with children and other pets.',
        images: [
          'https://images.unsplash.com/photo-1633722715463-d30f4f325e24',
          'https://images.unsplash.com/photo-1552053831-71594a27632d',
        ],
      },
      {
        name: 'Siberian Husky',
        price: '28.500.000 VND',
        sku: 'DOG-HUS-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 8,
        size: PetsSize.LARGE,
        color: PetsColor.BLACKANDWHITE,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Da Nang',
        publishedDate: new Date('2025-01-20'),
        additionalInformation:
          'Majestic Siberian Husky with stunning black and white coat. Energetic, requires regular exercise and experienced owner.',
        images: [
          'https://images.unsplash.com/photo-1605568427561-40dd23c2acea',
          'https://images.unsplash.com/photo-1590419690008-905895e8fe0d',
        ],
      },
      {
        name: 'French Bulldog',
        price: '35.000.000 VND',
        sku: 'DOG-FRB-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 4,
        size: PetsSize.SMALL,
        color: PetsColor.TAN,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Nha Trang',
        publishedDate: new Date('2025-01-25'),
        additionalInformation:
          'Charming Frenchie with excellent pedigree. Playful, adaptable, and great for families living in apartments.',
        images: [
          'https://images.unsplash.com/photo-1583511655826-05700442b31b',
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee',
        ],
      },
      {
        name: 'Labrador Retriever',
        price: '20.000.000 VND',
        sku: 'DOG-LAB-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.FEMALE,
        age: 5,
        size: PetsSize.LARGE,
        color: PetsColor.APRICOT,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Can Tho',
        publishedDate: new Date('2025-01-30'),
        additionalInformation:
          'Friendly Labrador with excellent temperament. Great family dog, already trained with basic commands.',
        images: [
          'https://images.unsplash.com/photo-1591946614720-90a587da4a36',
          'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf',
        ],
      },
      {
        name: 'German Shepherd',
        price: '27.000.000 VND',
        sku: 'DOG-GER-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 12,
        size: PetsSize.LARGE,
        color: PetsColor.BLACK,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Da Lat',
        publishedDate: new Date('2025-02-02'),
        additionalInformation:
          'Noble German Shepherd with excellent protection instincts. Intelligent and easily trainable.',
        images: [
          'https://images.unsplash.com/photo-1589941013453-ec89f98c6e8e',
          'https://images.unsplash.com/photo-1607077985404-acaa283f4b85',
        ],
      },
      {
        name: 'Shiba Inu',
        price: '34.000.000 VND',
        sku: 'DOG-SHI-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.FEMALE,
        age: 7,
        size: PetsSize.MEDIUM,
        color: PetsColor.RED,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Ho Chi Minh City',
        publishedDate: new Date('2025-02-05'),
        additionalInformation:
          'Beautiful Shiba Inu with classic fox-like appearance. Independent personality with strong hunting instincts.',
        images: [
          'https://images.unsplash.com/photo-1593991341138-9a9db56a8bf6',
          'https://images.unsplash.com/photo-1574293876203-8bded53be0f0',
        ],
      },
      {
        name: 'Corgi',
        price: '29.500.000 VND',
        sku: 'DOG-COR-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 6,
        size: PetsSize.SMALL,
        color: PetsColor.TAN,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Hue',
        publishedDate: new Date('2025-02-10'),
        additionalInformation:
          'Cheerful Pembroke Welsh Corgi with characteristic short legs and expressive face. Energetic and intelligent.',
        images: [
          'https://images.unsplash.com/photo-1612536057832-2ff7ead58194',
          'https://images.unsplash.com/photo-1554692918-08fa0fdc9db3',
        ],
      },
      {
        name: 'Pomeranian',
        price: '26.000.000 VND',
        sku: 'DOG-POM-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.FEMALE,
        age: 4,
        size: PetsSize.SMALL,
        color: PetsColor.APRICOT,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: false,
        location: 'Hai Phong',
        publishedDate: new Date('2025-02-15'),
        additionalInformation:
          'Fluffy apricot Pomeranian with adorable teddy bear face. Lively, bold personality in a tiny package.',
        images: [
          'https://images.unsplash.com/photo-1582456891925-a53965520520',
          'https://images.unsplash.com/photo-1559155395-1573295a67ef',
        ],
      },
      {
        name: 'Beagle',
        price: '18.500.000 VND',
        sku: 'DOG-BEA-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 9,
        size: PetsSize.MEDIUM,
        color: PetsColor.BLACKANDWHITE,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Vung Tau',
        publishedDate: new Date('2025-02-20'),
        additionalInformation:
          'Classic black and white Beagle with friendly demeanor. Great with children, loves to follow his nose.',
        images: [
          'https://images.unsplash.com/photo-1505628346881-b72b27e84530',
          'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993',
        ],
      },
      {
        name: 'Dachshund',
        price: '19.000.000 VND',
        sku: 'DOG-DAC-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.FEMALE,
        age: 5,
        size: PetsSize.SMALL,
        color: PetsColor.RED,
        vaccinated: true,
        dewormed: true,
        certification: false,
        microchip: false,
        location: 'Hanoi',
        publishedDate: new Date('2025-02-25'),
        additionalInformation:
          'Charming miniature Dachshund with smooth red coat. Brave, tenacious, and surprisingly good watchdog.',
        images: [
          'https://images.unsplash.com/photo-1612195583950-b8fd34c87093',
          'https://images.unsplash.com/photo-1647666573402-cba2c0df45a1',
        ],
      },
      {
        name: 'Boxer',
        price: '23.500.000 VND',
        sku: 'DOG-BOX-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 3,
        size: PetsSize.LARGE,
        color: PetsColor.TAN,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Ho Chi Minh City',
        publishedDate: new Date('2025-03-02'),
        additionalInformation:
          'Energetic and playful Boxer with strong muscles and friendly disposition. Great family companion and guardian.',
        images: [
          'https://images.unsplash.com/photo-1543071220-6ee5bf71a54e',
          'https://images.unsplash.com/photo-1622237913434-3e461b651e5f',
        ],
      },
      {
        name: 'Border Collie',
        price: '22.000.000 VND',
        sku: 'DOG-COL-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.FEMALE,
        age: 2,
        size: PetsSize.MEDIUM,
        color: PetsColor.BLACKANDWHITE,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Dalat',
        publishedDate: new Date('2025-03-05'),
        additionalInformation:
          'Extremely intelligent Border Collie with classic black and white markings. Needs mental stimulation and activity.',
        images: [
          'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47',
          'https://images.unsplash.com/photo-1551430872-6b11a04a2be5',
        ],
      },
      {
        name: 'Rottweiler',
        price: '27.000.000 VND',
        sku: 'DOG-ROT-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 4,
        size: PetsSize.LARGE,
        color: PetsColor.BLACK,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Hanoi',
        publishedDate: new Date('2025-03-08'),
        additionalInformation:
          'Powerful and protective Rottweiler. Loyal and devoted to family with proper socialization and training.',
        images: [
          'https://images.unsplash.com/photo-1567752881298-894bb81f9379',
          'https://images.unsplash.com/photo-1599944815776-55bc33ac9bf8',
        ],
      },
      {
        name: 'Akita Inu',
        price: '36.000.000 VND',
        sku: 'DOG-AKI-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 3,
        size: PetsSize.LARGE,
        color: PetsColor.RED,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Da Nang',
        publishedDate: new Date('2025-03-10'),
        additionalInformation:
          'Noble and dignified Akita with beautiful red coat. Loyal and protective companion requiring experienced owner.',
        images: [
          'https://images.unsplash.com/photo-1561298169-224f08e029a1',
          'https://images.unsplash.com/photo-1525347201235-44dcd6765132',
        ],
      },
      {
        name: 'Bichon Frise',
        price: '21.000.000 VND',
        sku: 'DOG-BIC-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.FEMALE,
        age: 2,
        size: PetsSize.SMALL,
        color: PetsColor.SILVER,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: false,
        location: 'Can Tho',
        publishedDate: new Date('2025-03-15'),
        additionalInformation:
          'Cheerful and playful Bichon Frise with fluffy white coat. Great for families and apartment living.',
        images: [
          'https://images.unsplash.com/photo-1569809317138-8d2ff6060c4e',
          'https://images.unsplash.com/photo-1587477858044-31c3ece9596a',
        ],
      },
      {
        name: 'Doberman',
        price: '31.000.000 VND',
        sku: 'DOG-DOB-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 3,
        size: PetsSize.LARGE,
        color: PetsColor.BLACK,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Hue',
        publishedDate: new Date('2025-03-18'),
        additionalInformation:
          'Athletic and alert Doberman with sleek black coat. Loyal, intelligent, and makes an excellent guardian.',
        images: [
          'https://images.unsplash.com/photo-1609240873713-eec400f73cc0',
          'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
        ],
      },
      {
        name: 'Dalmatian',
        price: '24.000.000 VND',
        sku: 'DOG-DAL-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.FEMALE,
        age: 4,
        size: PetsSize.LARGE,
        color: PetsColor.BLACKANDWHITE,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Ho Chi Minh City',
        publishedDate: new Date('2025-03-20'),
        additionalInformation:
          'Distinctive spotted Dalmatian with high energy and endurance. Needs plenty of exercise and consistent training.',
        images: [
          'https://images.unsplash.com/photo-1583512603866-910c8542ba9d',
          'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3',
        ],
      },
      {
        name: 'Cocker Spaniel',
        price: '18.000.000 VND',
        sku: 'DOG-CKS-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 5,
        size: PetsSize.MEDIUM,
        color: PetsColor.APRICOT,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: false,
        location: 'Nha Trang',
        publishedDate: new Date('2025-03-23'),
        additionalInformation:
          'Sweet and gentle Cocker Spaniel with beautiful apricot coat. Affectionate family companion who loves to play.',
        images: [
          'https://images.unsplash.com/photo-1616529735204-6799550783d3',
          'https://images.unsplash.com/photo-1591946532546-4160f60a5911',
        ],
      },
      {
        name: 'Jack Russell Terrier',
        price: '17.000.000 VND',
        sku: 'DOG-JRT-001',
        specie: PetsSpecie.DOG,
        gender: PetsGender.MALE,
        age: 2,
        size: PetsSize.SMALL,
        color: PetsColor.BLACKANDWHITE,
        vaccinated: true,
        dewormed: true,
        certification: true,
        microchip: true,
        location: 'Hai Phong',
        publishedDate: new Date('2025-03-25'),
        additionalInformation:
          'Lively and bold Jack Russell Terrier. Intelligent, energetic, and requires plenty of exercise and mental stimulation.',
        images: [
          'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
          'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8',
        ],
      },
    ];

    try {
      for (const pet of pets) {
        await this.petsRepository.save(pet);
      }
      console.log('The Seeding pets was successful');
    } catch (error) {
      console.error('An error has occurred in seeding pets: ', error);
    }
  }
}
