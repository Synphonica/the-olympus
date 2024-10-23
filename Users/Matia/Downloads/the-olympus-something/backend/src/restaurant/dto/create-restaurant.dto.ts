import { Restaurante } from '@prisma/client';

export type CreateRestaurantDto = Omit<
  Restaurante,
  'id' | 'createAt' | 'updatedAt'
>;
