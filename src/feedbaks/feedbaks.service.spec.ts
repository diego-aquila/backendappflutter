import { Test, TestingModule } from '@nestjs/testing';
import { FeedbaksService } from './feedbaks.service';

describe('FeedbaksService', () => {
  let service: FeedbaksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedbaksService],
    }).compile();

    service = module.get<FeedbaksService>(FeedbaksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
