import { Producto } from '@prisma/client'

export type CreateProductDto = Omit<Producto, 'id' | 'createdAt' | 'updatedAt'>