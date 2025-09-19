import { Test, TestingModule } from '@nestjs/testing';
import { SujetosService } from './sujetos.service';

describe('SujetosService', () => {
  let service: SujetosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetosService],
    }).compile();

    service = module.get<SujetosService>(SujetosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
