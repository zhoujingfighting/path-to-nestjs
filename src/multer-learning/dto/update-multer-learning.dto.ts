import { PartialType } from '@nestjs/mapped-types';
import { CreateMulterLearningDto } from './create-multer-learning.dto';

export class UpdateMulterLearningDto extends PartialType(CreateMulterLearningDto) {}
