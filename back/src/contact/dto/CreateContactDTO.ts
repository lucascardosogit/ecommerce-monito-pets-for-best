import { IsEmail, IsMobilePhone, IsString } from 'class-validator';

export class CreateContactDTO {
  @IsString()
  name: string;

  @IsMobilePhone()
  cell_phone: string;

  @IsEmail()
  email: string;

  @IsString()
  city: string;

  @IsString()
  state: string;
}
