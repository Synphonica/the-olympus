import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prismaService.producto.create({
        data: createProductDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            `Product with name ${createProductDto.nombre} already exists`,
          );
        }
      }

      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return this.prismaService.producto.findMany();
  }

  async findOne(id: number) {
    const productFound = await this.prismaService.producto.findUnique({
      where: {
        id,
      },
    });

    if (!productFound) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return productFound;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productFound = await this.prismaService.producto.update({
      where: {
        id,
      },
      data: updateProductDto,
    });

    if (!productFound) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return productFound;
  }

  async remove(id: number) {
    const deletedProduct = await this.prismaService.producto.delete({
      where: {
        id,
      },
    });

    if (!deletedProduct) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return deletedProduct;
  }
}