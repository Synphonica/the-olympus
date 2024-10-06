import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RestaurantService {
  constructor(private prismaService: PrismaService) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    try {
      return await this.prismaService.restaurant.create({
        data: createRestaurantDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            `Restaurant con el nombre ${createRestaurantDto.name} ya existe`,
          );
        }
      }

      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return this.prismaService.restaurant.findMany();
  }

  async findOne(id: number) {
    const restaurantFound = await this.prismaService.restaurant.findUnique({
      where: {
        id: id,
      },
    });

    if (!restaurantFound) {
      throw new NotFoundException(`Restaurant con id ${id} no encontrado`);
    }

    return restaurantFound;
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    const restaurantFound = await this.prismaService.restaurant.update({
      where: {
        id,
      },
      data: updateRestaurantDto,
    });

    if (!restaurantFound) {
      throw new NotFoundException(`Restaurant con id ${id} no encontrado`);
    }

    return restaurantFound;
  }

  async remove(id: number) {
    const deletedProduct = await this.prismaService.restaurant.delete({
      where: {
        id,
      },
    });

    if (!deletedProduct) {
      throw new NotFoundException(`Restaurant con id ${id} no encontrado`);
    }

    return deletedProduct;
  }
}
