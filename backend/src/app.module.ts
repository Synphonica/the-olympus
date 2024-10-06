import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [ProductsModule, AuthModule, RestaurantModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
