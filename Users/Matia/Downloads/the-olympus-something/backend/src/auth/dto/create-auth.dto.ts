import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  correo: string;

  @IsString()
  password: string;
}
