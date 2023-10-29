import { Test, TestingModule } from '@nestjs/testing';
import { ExamUserService } from '../exam-user.service';

describe('ExamUserService', () => {
  let service: ExamUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamUserService],
    }).compile();

    service = module.get<ExamUserService>(ExamUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
