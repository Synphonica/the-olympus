import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule, UserModule, AuthModule, RestaurantModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
