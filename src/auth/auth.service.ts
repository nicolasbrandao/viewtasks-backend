import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthPayloadDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({
    email,
    password,
  }: AuthPayloadDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    const isMatch = await bcrypt.compare(user?.password, password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
