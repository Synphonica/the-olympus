import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  correo: string;

  @IsString()
  telefono: string;

  @IsString()
  direccion: string;

  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @IsOptional()
  @IsString()
  rol?: string;
}
