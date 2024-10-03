import { IsEmail, IsString, MinLength, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: 'Correo electrónico del usuario' })
  @IsEmail()
  correo: string;

  @ApiProperty({ example: 'password123', description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterDto {
  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre completo del usuario' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'user@example.com', description: 'Correo electrónico del usuario' })
  @IsEmail()
  correo: string;

  @ApiProperty({ example: '+1234567890', description: 'Número de teléfono del usuario' })
  @IsPhoneNumber()
  telefono: string;

  @ApiProperty({ example: 'Calle Principal 123, Ciudad', description: 'Dirección del usuario' })
  @IsString()
  direccion: string;

  @ApiProperty({ example: 'password123', description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(6)
  password: string;
}