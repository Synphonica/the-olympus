import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolUsuario } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<RolUsuario[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true; // Si no se requieren roles específicos, permite el acceso
    }

    const { user } = context.switchToHttp().getRequest();

    // Verifica si el usuario tiene uno de los roles requeridos
    const foundUser = await this.prisma.cliente.findUnique({
      where: { id: user.userId },
    });

    if (!foundUser || !foundUser.estado) {
      throw new ForbiddenException('Usuario no encontrado o deshabilitado.');
    }

    return requiredRoles.some((role) => foundUser.rol === role);
  }
}
