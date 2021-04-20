import { Test, TestingModule } from '@nestjs/testing';
import { KxController } from './kx.controller';
import { KxService } from './kx.service';

describe('KxController', () => {
  let controller: KxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KxController],
      providers: [KxService],
    }).compile();

    controller = module.get<KxController>(KxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
