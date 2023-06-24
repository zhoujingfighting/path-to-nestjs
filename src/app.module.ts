import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LifeCycleModule } from './life-cycle/life-cycle.module';

@Module({
  imports: [LifeCycleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
