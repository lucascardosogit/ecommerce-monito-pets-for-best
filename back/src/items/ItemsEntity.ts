import { PetsSpecie } from 'src/common/enum/SpecieType';
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

  @Column({ type: 'enum', enum: PetsSpecie })
  forSpecie: PetsSpecie;

  @Column()
  product: string;

  @Column()
  size: string;

  @Column({ type: 'text', nullable: true })
  additionalInformation: string;

  @Column({ type: 'simple-array' })
  images: string[];
}
