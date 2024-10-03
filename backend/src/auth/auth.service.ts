import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // Validación de usuario según su rol
  async validateUser(
    correo: string,
    password: string,
    userType: 'cliente' | 'admin' | 'superadmin',
  ) {
    let user;
    if (userType === 'cliente') {
      user = await this.prisma.cliente.findUnique({ where: { correo } });
    } else if (userType === 'admin') {
      user = await this.prisma.admin.findUnique({ where: { correo } });
    } else if (userType === 'superadmin') {
      user = await this.prisma.superAdmin.findUnique({ where: { correo } });
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }

  // Registro de usuario
  async register(data: {
    nombre: string;
    correo: string;
    password: string;
    rol: 'CLIENTE' | 'ADMIN' | 'SUPERADMIN';
  }) {
    let user;
    const hashedPassword = await bcrypt.hash(data.password, 10);

    if (data.rol === 'CLIENTE') {
      user = await this.prisma.cliente.create({
        data: {
          nombre: data.nombre,
          correo: data.correo,
          password: hashedPassword,
          rol: data.rol,
          telefono: 'defaultTelefono',
          direccion: 'defaultDireccion',
        },
      });
    } else if (data.rol === 'ADMIN') {
      user = await this.prisma.admin.create({
        data: {
          nombre: data.nombre,
          correo: data.correo,
          password: hashedPassword,
          rol: data.rol,
        },
      });
    } else if (data.rol === 'SUPERADMIN') {
      user = await this.prisma.superAdmin.create({
        data: {
          nombre: data.nombre,
          correo: data.correo,
          password: hashedPassword,
          rol: data.rol,
        },
      });
    } else {
      throw new BadRequestException('Rol inválido');
    }

    return { message: `${data.rol} registrado correctamente`, user };
  }

  // Método de login
  async login(user: any) {
    const payload = { correo: user.correo, sub: user.id, role: user.rol };
    return {
      access_token: this.jwtService.sign(payload),
      role: user.rol,
    };
  }

  async logActivity(userId: number, action: string) {
    await this.prisma.registroActividad.create({
      data: {
        usuarioId: userId,
        accion: action,
        detalles: `Acción realizada por el usuario con ID: ${userId}`,
      },
    });
  }
}
