import { Test, TestingModule } from '@nestjs/testing';
import { MulterLearningController } from './multer-learning.controller';
import { MulterLearningService } from './multer-learning.service';

describe('MulterLearningController', () => {
  let controller: MulterLearningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MulterLearningController],
      providers: [MulterLearningService],
    }).compile();

    controller = module.get<MulterLearningController>(MulterLearningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
