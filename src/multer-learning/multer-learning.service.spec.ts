import { Test, TestingModule } from '@nestjs/testing';
import { MulterLearningService } from './multer-learning.service';

describe('MulterLearningService', () => {
  let service: MulterLearningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MulterLearningService],
    }).compile();

    service = module.get<MulterLearningService>(MulterLearningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
