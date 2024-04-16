import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TasksService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createTaskDto: Prisma.TaskCreateInput) {
    return this.databaseService.task.create({ data: createTaskDto });
  }

  async findAllByTasksListId(tasksListId: string) {
    return this.databaseService.task.findMany({
      where: { tasksListId },
    });
  }

  findOne(id: string) {
    return this.databaseService.task.findUnique({ where: { id } });
  }

  update(id: string, updateTaskDto: Prisma.TaskUpdateInput) {
    return this.databaseService.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: string) {
    return this.databaseService.task.delete({ where: { id } });
  }
}
