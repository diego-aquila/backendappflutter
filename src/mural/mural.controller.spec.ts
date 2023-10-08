import { Test, TestingModule } from '@nestjs/testing';
import { MuralController } from './mural.controller';
import { MuralService } from './mural.service';

describe('MuralController', () => {
  let controller: MuralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuralController],
      providers: [MuralService],
    }).compile();

    controller = module.get<MuralController>(MuralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
