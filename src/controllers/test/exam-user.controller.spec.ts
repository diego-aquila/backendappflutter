import { Test, TestingModule } from '@nestjs/testing';
import { ExamUserController } from '../exam-user.controller';
import { ExamUserService } from '../../services/exam-user.service';

describe('ExamUserController', () => {
  let controller: ExamUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamUserController],
      providers: [ExamUserService],
    }).compile();

    controller = module.get<ExamUserController>(ExamUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
