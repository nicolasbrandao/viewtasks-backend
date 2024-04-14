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
import { TaskslistsService } from './tasks-lists.service';
import { Prisma } from '@prisma/client';

@Controller('tasks-lists')
export class TaskslistsController {
  constructor(private readonly taskslistsService: TaskslistsService) {}

  @Post()
  create(@Body() createTaskslistDto: Prisma.TasksListCreateInput) {
    return this.taskslistsService.create(createTaskslistDto);
  }

  @Get()
  findAll(@Query('userId') userId?: string) {
    if (!userId) {
      return this.taskslistsService.findAll();
    }

    return this.taskslistsService.findAllByUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskslistsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskslistDto: Prisma.TasksListUpdateInput,
  ) {
    return this.taskslistsService.update(id, updateTaskslistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskslistsService.remove(id);
  }
}
