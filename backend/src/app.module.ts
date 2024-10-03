import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ClienteModule } from './cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Asegúrate de que esto esté configurado
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000, // Tiempo en milisegundos (1 minuto)
      limit: 5, // Número de solicitudes permitidas por IP en el tiempo especificado
    }]),
    PrismaModule,
    ProductsModule,
    AuthModule,
    AdminModule,
    ClienteModule,
  ],
})
export class AppModule {}