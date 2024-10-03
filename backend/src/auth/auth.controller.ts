import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

type UserType = 'cliente' | 'admin' | 'superadmin';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Inicio de sesión' })
  async login(
    @Body() body: { correo: string; password: string; userType: UserType },
  ) {
    const user = await this.authService.validateUser(
      body.correo,
      body.password,
      body.userType,
    );
    return this.authService.login(user);
  }

  @Post('register')
  @ApiOperation({ summary: 'Registro de usuario' })
  async register(
    @Body()
    body: {
      nombre: string;
      correo: string;
      password: string;
      rol: UserType;
    },
  ) {
    if (!body.rol) {
      throw new BadRequestException('Role is required');
    }
    const mappedBody = {
      ...body,
      rol: body.rol.toUpperCase() as 'CLIENTE' | 'ADMIN' | 'SUPERADMIN',
    };
    return this.authService.register(mappedBody);
  }
}
