import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.cliente.findUnique({ where: { correo: email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.correo, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userData: { nombre: string, correo: string, telefono: string, direccion: string, password: string }) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await this.prisma.cliente.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
    const { password, ...result } = user;
    return result;
  }
}