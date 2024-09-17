import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: { correo: string, password: string }) {
    const user = await this.authService.validateUser(loginData.correo, loginData.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerData: { nombre: string, correo: string, telefono: string, direccion: string, password: string }) {
    return this.authService.register(registerData);
  }
}