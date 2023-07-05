import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LifeCycleModule } from './life-cycle/life-cycle.module';
import { MulterLearningModule } from './multer-learning/multer-learning.module';

@Module({
  imports: [LifeCycleModule, MulterLearningModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
