import { IsString, IsEmail, MinLength, IsPhoneNumber } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  nombre: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  correo: string;

  @IsPhoneNumber(null, { message: 'El número de teléfono no es válido' })
  telefono: string;

  @IsString()
  direccion: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
