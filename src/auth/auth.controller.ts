import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Request() req: ExpressRequest, @Body() signInDto: AuthPayloadDto) {
    return this.authService.signIn(signInDto);
  }
}
