import { Test, TestingModule } from '@nestjs/testing';
import { FeedbaksController } from './feedbaks.controller';
import { FeedbaksService } from './feedbaks.service';

describe('FeedbaksController', () => {
  let controller: FeedbaksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedbaksController],
      providers: [FeedbaksService],
    }).compile();

    controller = module.get<FeedbaksController>(FeedbaksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
