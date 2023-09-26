import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExamUserService } from './exam-user.service';
import { CreateExamUserDto } from './dto/create-exam-user.dto';
import { UpdateExamUserDto } from './dto/update-exam-user.dto';

@Controller('exam-user')
export class ExamUserController {
  constructor(private readonly examUserService: ExamUserService) {}

  @Post()
  create(@Body() createExamUserDto: CreateExamUserDto) {
    return this.examUserService.create(createExamUserDto);
  }

  @Get()
  findAll() {
    return this.examUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamUserDto: UpdateExamUserDto,
  ) {
    return this.examUserService.update(+id, updateExamUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examUserService.remove(+id);
  }
}
