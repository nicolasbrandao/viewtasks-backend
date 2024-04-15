import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskslistsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTaskslistDto: Prisma.TasksListCreateInput) {
    return this.databaseService.tasksList.create({ data: createTaskslistDto });
  }

  async findAll() {
    return this.databaseService.tasksList.findMany();
  }

  async findAllByUserId(userId: string) {
    return this.databaseService.tasksList.findMany({
      where: { userId },
    });
  }

  async findOne(id: string) {
    return this.databaseService.tasksList.findUnique({ where: { id } });
  }

  async update(id: string, updateTaskslistDto: Prisma.TasksListUpdateInput) {
    return this.databaseService.tasksList.update({
      where: { id },
      data: updateTaskslistDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.tasksList.delete({ where: { id } });
  }
}
