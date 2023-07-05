import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MulterLearningService } from './multer-learning.service';
import { CreateMulterLearningDto } from './dto/create-multer-learning.dto';
import { UpdateMulterLearningDto } from './dto/update-multer-learning.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('multer-learning')
export class MulterLearningController {
  constructor(private readonly multerLearningService: MulterLearningService) {}

  @Post()
  create(@Body() createMulterLearningDto: CreateMulterLearningDto) {
    return this.multerLearningService.create(createMulterLearningDto);
  }

  @Get()
  findAll() {
    return this.multerLearningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multerLearningService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMulterLearningDto: UpdateMulterLearningDto) {
    return this.multerLearningService.update(+id, updateMulterLearningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.multerLearningService.remove(+id);
  }

  @Post('multer')
  @UseInterceptors(FileInterceptor('multer', {
    dest : "upload"
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log(1111);
    console.log('body', body);
    console.log('file', file);
}
}
