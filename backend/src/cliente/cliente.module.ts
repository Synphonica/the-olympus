import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService], // Inyecta PrismaService
  exports: [ClienteService], // Exporta el servicio para que sea reutilizable en otros módulos (como admin)
})
export class ClienteModule {}
