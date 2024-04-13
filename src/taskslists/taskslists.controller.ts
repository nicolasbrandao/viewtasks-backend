import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskslistsService } from './taskslists.service';
import { Prisma } from '@prisma/client';

@Controller('taskslists')
export class TaskslistsController {
  constructor(private readonly taskslistsService: TaskslistsService) {}

  @Post()
  create(@Body() createTaskslistDto: Prisma.TasksListCreateInput) {
    return this.taskslistsService.create(createTaskslistDto);
  }

  @Get()
  findAll() {
    return this.taskslistsService.findAll();
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
