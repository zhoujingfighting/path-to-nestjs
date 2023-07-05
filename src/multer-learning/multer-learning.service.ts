import { Injectable } from '@nestjs/common';
import { CreateMulterLearningDto } from './dto/create-multer-learning.dto';
import { UpdateMulterLearningDto } from './dto/update-multer-learning.dto';

@Injectable()
export class MulterLearningService {
  create(createMulterLearningDto: CreateMulterLearningDto) {
    return 'This action adds a new multerLearning';
  }

  findAll() {
    return `This action returns all multerLearning`;
  }

  findOne(id: number) {
    return `This action returns a #${id} multerLearning`;
  }

  update(id: number, updateMulterLearningDto: UpdateMulterLearningDto) {
    return `This action updates a #${id} multerLearning`;
  }

  remove(id: number) {
    return `This action removes a #${id} multerLearning`;
  }
}
