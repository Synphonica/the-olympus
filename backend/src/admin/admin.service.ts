import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OtpService } from '../auth/otp.service'; // OTP Service
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly otpService: OtpService,
  ) {}

  async createAdmin(data: {
    nombre: string;
    correo: string;
    password: string;
  }) {
    const existingUser = await this.prisma.admin.findUnique({
      where: { correo: data.correo },
    });
    if (existingUser)
      throw new BadRequestException('El correo ya está en uso.');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const otpSecret = this.otpService.generateSecret(data.correo);

    const admin = await this.prisma.admin.create({
      data: {
        ...data,
        password: hashedPassword,
        otpSecret: otpSecret.base32, // Guardamos el secreto OTP en base32
      },
    });

    return {
      admin,
      qrCode: await this.otpService.generateQRCode(otpSecret),
    };
  }

  async verifyAdminOtp(adminId: number, token: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { id: adminId },
    });
    if (!admin) throw new BadRequestException('Admin no encontrado.');

    const isValid = this.otpService.verifyToken(admin.otpSecret, token);
    if (!isValid) throw new BadRequestException('Código OTP incorrecto.');

    return { message: 'Código OTP válido.' };
  }
}
