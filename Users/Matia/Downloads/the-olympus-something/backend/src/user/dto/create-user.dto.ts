import { IsEmail, IsString, IsOptional, IsEnum } from 'class-validator';
import { RolUsuario } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsString()
  telefono: string;

  @IsString()
  direccion: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsEnum(RolUsuario)
  rol?: RolUsuario;
}