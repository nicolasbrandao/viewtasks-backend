import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createUserDtoWithHashedPassword = {
      ...createUserDto,
      password: hashedPassword,
    };

    return this.databaseService.user.create({
      data: createUserDtoWithHashedPassword,
    });
  }

  async findAll() {
    return this.databaseService.user.findMany({});
  }

  async findOne(email: string) {
    return this.databaseService.user.findUnique({ where: { email } });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.databaseService.user.delete({ where: { id } });
  }
}
