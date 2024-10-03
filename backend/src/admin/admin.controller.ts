import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar un administrador' })
  async registerAdmin(@Body() body: { nombre: string, correo: string, password: string }) {
    return this.adminService.createAdmin(body);
  }

  @Post('verify-otp')
  @ApiOperation({ summary: 'Verificar OTP de un administrador' })
  async verifyOtp(@Body() body: { adminId: number, token: string }) {
    return this.adminService.verifyAdminOtp(body.adminId, body.token);
  }
}
