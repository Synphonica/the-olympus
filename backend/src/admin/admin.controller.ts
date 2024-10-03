import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  async registerAdmin(@Body() body: { nombre: string, correo: string, password: string }) {
    return this.adminService.createAdmin(body);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() body: { adminId: number, token: string }) {
    return this.adminService.verifyAdminOtp(body.adminId, body.token);
  }
}
