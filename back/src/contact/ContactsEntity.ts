import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cell_phone: string;

  @Column()
  email: string;

  @Column()
  city: string;

  @Column()
  state: string;
}
