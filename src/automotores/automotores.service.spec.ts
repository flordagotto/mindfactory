import { Test, TestingModule } from '@nestjs/testing';
import { AutomotoresService } from './automotores.service';

describe('AutomotoresService', () => {
  let service: AutomotoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomotoresService],
    }).compile();

    service = module.get<AutomotoresService>(AutomotoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
