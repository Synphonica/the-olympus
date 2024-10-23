import { PartialType } from '@nestjs/swagger';
import { CreateRestaurantDto } from './create-restaurant.dto';

export type UpdateRestaurantDto = Partial<CreateRestaurantDto>
