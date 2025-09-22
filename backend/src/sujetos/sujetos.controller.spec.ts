import { Test, TestingModule } from '@nestjs/testing';
import { SujetosController } from './sujetos.controller';

describe('SujetosController', () => {
  let controller: SujetosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetosController],
    }).compile();

    controller = module.get<SujetosController>(SujetosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
