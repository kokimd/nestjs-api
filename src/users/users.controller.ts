import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { CredentialsDto } from './dto/credentials.dto';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.signUp(createUserDto);
  }

  @Post('signin')
  async signIn(
    @Body() credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.usersService.signIn(credentialsDto);
  }
}
