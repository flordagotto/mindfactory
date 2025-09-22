import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoDeValorController } from './objeto-de-valor.controller';

describe('ObjetoDeValorController', () => {
  let controller: ObjetoDeValorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetoDeValorController],
    }).compile();

    controller = module.get<ObjetoDeValorController>(ObjetoDeValorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
