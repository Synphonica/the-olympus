import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    // Comprobar si el correo ya existe
    const existingUser = await this.prisma.cliente.findUnique({
      where: { correo: dto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está en uso');
    }

    // Crear nuevo cliente con contraseña encriptada
    const newUser = await this.prisma.cliente.create({
      data: {
        nombre: dto.nombre,
        correo: dto.correo,
        telefono: dto.telefono,
        direccion: dto.direccion,
        password: await hash(dto.password, 10),
        rol: dto.rol ?? 'CLIENTE',  // Rol por defecto es CLIENTE
        estado: true,
      },
    });

    // Excluir la contraseña del objeto que devolvemos
    const { password, ...result } = newUser;
    return result;
  }

  async findByEmail(correo: string) {
    return await this.prisma.cliente.findUnique({
      where: { correo },
    });
  }

  async findById(id: number) {
    return await this.prisma.cliente.findUnique({
      where: { id },
    });
  }
}
