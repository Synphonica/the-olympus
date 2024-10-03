import { SetMetadata } from '@nestjs/common';
import { RolUsuario } from '@prisma/client';

export const Roles = (...roles: RolUsuario[]) => SetMetadata('roles', roles);