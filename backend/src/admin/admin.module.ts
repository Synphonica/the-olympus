import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../../src/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../src/auth/guards/roles.guard';
import { ClienteModule } from '../cliente/cliente.module';
import { AdminService } from './admin.service';
import { OtpService } from 'src/auth/otp.service';

@Module({
  imports: [ClienteModule],
  controllers: [AdminController],
  providers: [PrismaService, JwtAuthGuard, RolesGuard, AdminService, OtpService], // Incluye guards y servicios reutilizados
})
export class AdminModule {}
