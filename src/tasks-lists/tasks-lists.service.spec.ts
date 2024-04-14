import { Test, TestingModule } from '@nestjs/testing';
import { TaskslistsService } from './tasks-lists.service';

describe('TaskslistsService', () => {
  let service: TaskslistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskslistsService],
    }).compile();

    service = module.get<TaskslistsService>(TaskslistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
