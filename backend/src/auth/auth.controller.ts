import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

type UserType = 'cliente' | 'admin' | 'superadmin';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { correo: string; password: string; userType: UserType }) {
    const user = await this.authService.validateUser(body.correo, body.password, body.userType);
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() body: { nombre: string, correo: string, password: string, rol: UserType }) {
    if (!body.rol) {
      throw new BadRequestException('Role is required');
    }
    const mappedBody = {
      ...body,
      rol: body.rol.toUpperCase() as 'CLIENTE' | 'ADMIN' | 'SUPERADMIN'
    };
    return this.authService.register(mappedBody);
  }
}