import { Restaurant } from '@prisma/client'

export type CreateRestaurantDto = Omit<Restaurant, 'id' | 'createAt' | 'updatedAt'>

