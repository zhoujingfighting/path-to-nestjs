import { Module } from '@nestjs/common';
import { MulterLearningService } from './multer-learning.service';
import { MulterLearningController } from './multer-learning.controller';

@Module({
  controllers: [MulterLearningController],
  providers: [MulterLearningService]
})
export class MulterLearningModule {}
