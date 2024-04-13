import { Module } from '@nestjs/common';
import { TaskslistsService } from './taskslists.service';
import { TaskslistsController } from './taskslists.controller';

@Module({
  controllers: [TaskslistsController],
  providers: [TaskslistsService],
})
export class TaskslistsModule {}
