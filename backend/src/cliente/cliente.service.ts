import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { RolUsuario } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un nuevo cliente o administrador
  async create(createClienteDto: CreateClienteDto) {
    return this.prisma.cliente.create({
      data: {
        ...createClienteDto,
        rol: (createClienteDto.rol as RolUsuario) || RolUsuario.CLIENTE, // Por defecto CLIENTE, pero puede ser ADMIN
      },
    });
  }

  // Obtener todos los clientes con paginación
  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return this.prisma.cliente.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // Obtener un cliente por su ID
  async findOne(id: number) {
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

  // Actualizar un cliente
  async update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prisma.cliente.update({
      where: { id },
      data: {
        // Copia todas las propiedades de updateClienteDto en el objeto data
        ...updateClienteDto,
        // Sobrescribe la propiedad rol si está definida, de lo contrario usa RolUsuario.CLIENTE
        rol: (updateClienteDto.rol as RolUsuario) || RolUsuario.CLIENTE, // Por defecto CLIENTE, pero puede ser ADMIN
      },
    });
  }

  // Eliminar un cliente
  async remove(id: number) {
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
