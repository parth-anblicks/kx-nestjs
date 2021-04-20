import { Module } from '@nestjs/common';
import { KxService } from './kx.service';
import { KxController } from './kx.controller';

@Module({
  controllers: [KxController],
  providers: [KxService]
})
export class KxModule {}
