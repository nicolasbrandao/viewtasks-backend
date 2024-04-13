import { Test, TestingModule } from '@nestjs/testing';
import { TaskslistsController } from './taskslists.controller';
import { TaskslistsService } from './taskslists.service';

describe('TaskslistsController', () => {
  let controller: TaskslistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskslistsController],
      providers: [TaskslistsService],
    }).compile();

    controller = module.get<TaskslistsController>(TaskslistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
