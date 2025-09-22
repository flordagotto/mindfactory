import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoDeValorService } from './objeto-de-valor.service';

describe('ObjetoDeValorService', () => {
  let service: ObjetoDeValorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjetoDeValorService],
    }).compile();

    service = module.get<ObjetoDeValorService>(ObjetoDeValorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
