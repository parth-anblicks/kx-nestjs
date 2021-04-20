import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KxModule } from './kx/kx.module';

@Module({
  imports: [KxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
