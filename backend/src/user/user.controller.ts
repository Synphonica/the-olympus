import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JtwGuard } from '../auth/guards/jwt.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JtwGuard)
  @ApiOperation({ summary: 'Crear un usuario' })
  @Get(':id')
  async getUserProfile(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    return await this.userService.findById(userId);
  }
}
