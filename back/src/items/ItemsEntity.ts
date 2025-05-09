import { PetSpecie } from 'src/common/enum/SpecieType';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  sku: string;

  @Column({ type: 'enum', enum: PetSpecie })
  forSpecie: PetSpecie;

  @Column()
  product: string;

  @Column()
  size: string;

  @Column({ type: 'text', nullable: true })
  additionalInformation: string;

  @Column({ type: 'simple-array' })
  images: string[];
}
