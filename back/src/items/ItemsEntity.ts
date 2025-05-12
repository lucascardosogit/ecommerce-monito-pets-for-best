import { PetsSpecie } from '../common/enum/SpecieType';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  sku: string;

  @Column({ type: 'enum', enum: PetsSpecie, nullable: true })
  forSpecie: PetsSpecie | null;

  @Column()
  product: string;

  @Column({ type: 'text', nullable: true })
  size: string | null;

  @Column({ type: 'text', nullable: true })
  additionalInformation: string;

  @Column({ type: 'simple-array' })
  images: string[];
}
