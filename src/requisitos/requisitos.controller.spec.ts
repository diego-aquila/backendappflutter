import { Test, TestingModule } from '@nestjs/testing';
import { RequisitosController } from './requisitos.controller';
import { RequisitosService } from './requisitos.service';

describe('RequisitosController', () => {
  let controller: RequisitosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequisitosController],
      providers: [RequisitosService],
    }).compile();

    controller = module.get<RequisitosController>(RequisitosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
