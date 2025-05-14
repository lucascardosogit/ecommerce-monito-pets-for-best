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
          'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2023-11/cachorro%20golden%20filhote.jpg.webp?itok=GMk6C7Rh',
          'https://images.photowall.com/products/57215/golden-retriever-puppy.jpg?h=699&q=85',
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
          'https://www.petz.com.br/cachorro/racas/husky-siberiano/img/husky-siberiano-caracteristicas-guia-racas.webp',
          'https://a-us.storyblok.com/f/1016262/4256x2832/9dcacc41fe/siberian-husky.jpeg',
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
          'https://upload.wikimedia.org/wikipedia/commons/1/18/2008-07-28_Dog_at_Frolick_Field.jpg',
          'https://image.petmd.com/files/styles/978x550/public/2022-10/french-bulldog.jpeg',
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
          'https://portalvet.royalcanin.com.br/media/wp-content/uploads/2023/08/labrador-retriever-02-800x532.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/640px-YellowLabradorLooking_new.jpg',
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
          'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg',
          'https://worldanimalfoundation.org/wp-content/uploads/2024/02/german-shepherd-2-3.jpg',
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
          'https://www.azpetshop.com.br/img/news/91/000.webp',
          'https://www.petz.com.br/cachorro/racas/shiba-inu/img/shiba-inu-caracteristicas-guia-racas.webp',
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
          'https://www.cobasi.com.br/arquivos/corgi-meio.png?v=637611065596900000',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/960px-Welchcorgipembroke.JPG',
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
          'https://cdn.britannica.com/41/233841-050-4FFECCF1/Pomeranian-dog.jpg',
          'https://static.vecteezy.com/ti/fotos-gratis/p2/6177803-lindo-pequeno-branco-pomeranian-spitz-gratis-foto.jpg',
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
          'https://www.petz.com.br/cachorro/racas/beagle/img/beagle-caracteristicas-fisicas.webp',
          'https://www.racoesreis.com.br/wordpress/wp-content/uploads/imagem_do_post-18.jpg',
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
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/%EB%8B%A5%EC%8A%A4%ED%9B%88%ED%8A%B8%28%EB%8B%A8%EB%AA%A8%EC%A2%85%29_%28Dachshund_%28Short%29%29.jpg/960px-%EB%8B%A5%EC%8A%A4%ED%9B%88%ED%8A%B8%28%EB%8B%A8%EB%AA%A8%EC%A2%85%29_%28Dachshund_%28Short%29%29.jpg',
          'https://www.equilibrio-petfood.com/wp-content/uploads/2024/03/cute-purebred-dogs-studio.jpg',
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
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/1._Brindle_boxer_dog%2C_female.jpg/1200px-1._Brindle_boxer_dog%2C_female.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Male_fawn_Boxer_undocked.jpg/1200px-Male_fawn_Boxer_undocked.jpg',
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
          'https://www.racoesreis.com.br/wordpress/wp-content/uploads/cachorro-origem5.jpg',
          'https://www.petz.com.br/blog/wp-content/uploads/2022/01/cruzamento-de-border-collie-com-vira-lata-topo-1280x720.jpg',
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
          'https://www.petz.com.br/cachorro/racas/rottweiler/img/rottweiler-caracteristicas-guia-racas.jpg',
          'https://uploads.metroimg.com/wp-content/uploads/2023/11/13151809/cachorro-preto-da-raca-rottweiler.jpg',
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
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Akita_inu.jpeg/960px-Akita_inu.jpeg',
          'https://www.petz.com.br/blog/wp-content/uploads/2017/11/akita-inu-02-1280x720.jpg',
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
          'https://www.petz.com.br/cachorro/racas/bichon-frise/img/bichon-frise-filhote.webp',
          'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/02/2141544809-bichon-frise.jpg',
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
          'https://www.petz.com.br/cachorro/racas/doberman/img/doberman-caracteristicas-fisicas.webp',
          'https://cachorrosderaca.com.br/wp-content/uploads/2017/01/doberman-893931_960_720.jpg',
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
          'https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Prunella_Fitzgerald_de_Puech_Barrayre.jpg/640px-Prunella_Fitzgerald_de_Puech_Barrayre.jpg',
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
          'https://cobasi.vteximg.com.br/arquivos/cocker-spaniel-ingles-meio.png?v=637617793621670000',
          'https://blog.polipet.com.br/wp-content/uploads/2023/01/AdobeStock_110253955-scaled.jpeg',
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
          'https://tudodebicho.vtexassets.com/arquivos/jack-russell-terrier-no-gramado-atento.jpg',
          'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3203924:1647286621/Jack-Russell-Terrier.jpg?f=default&$p$f=1227f5e',
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
