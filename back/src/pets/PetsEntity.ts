import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PetsGender } from '../common/enum/GenderType';
import { PetsSize } from '../common/enum/SizeType';
import { PetsSpecie } from '../common/enum/SpecieType';
import { PetsColor } from '../common/enum/ColorType';

@Entity()
export class Pets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  sku: string;

  @Column({ type: 'enum', enum: PetsSpecie })
  specie: PetsSpecie;

  @Column({ type: 'enum', enum: PetsGender })
  gender: PetsGender;

  @Column()
  age: number;

  @Column({ type: 'enum', enum: PetsSize })
  size: PetsSize;

  @Column({ type: 'enum', enum: PetsColor })
  color: PetsColor;

  @Column()
  vaccinated: boolean;

  @Column()
  dewormed: boolean;

  @Column()
  certification: boolean;

  @Column()
  microchip: boolean;

  @Column()
  location: string;

  @Column({ type: 'date' })
  publishedDate: Date;

  @Column({ type: 'text', nullable: true })
  additionalInformation: string;

  @Column({ type: 'simple-array' })
  images: string[];
}
