import { Module } from '@nestjs/common';
import { TaskslistsService } from './tasks-lists.service';
import { TaskslistsController } from './tasks-lists.controller';

@Module({
  controllers: [TaskslistsController],
  providers: [TaskslistsService],
})
export class TaskslistsModule {}
