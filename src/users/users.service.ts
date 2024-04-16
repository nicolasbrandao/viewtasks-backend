import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = bcrypt.hashSync(createUserDto.password, 10);
    const createUserDtoWithHashedPassword = {
      ...createUserDto,
      password: hashedPassword,
    };

    return this.databaseService.user.create({
      data: createUserDtoWithHashedPassword,
    });
  }

  async findOne(email: string) {
    return this.databaseService.user.findUnique({ where: { email } });
  }
}
