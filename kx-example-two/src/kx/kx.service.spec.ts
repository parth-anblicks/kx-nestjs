import { Test, TestingModule } from '@nestjs/testing';
import { KxService } from './kx.service';

describe('KxService', () => {
  let service: KxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KxService],
    }).compile();

    service = module.get<KxService>(KxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
