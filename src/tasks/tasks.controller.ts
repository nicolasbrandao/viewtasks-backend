import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Prisma } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: Prisma.TaskCreateInput) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(@Query('tasksListId') tasksListId?: string) {
    if (!tasksListId) {
      return this.tasksService.findAll();
    }

    return this.tasksService.findAllByTasksListId(tasksListId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: Prisma.TaskUpdateInput,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
