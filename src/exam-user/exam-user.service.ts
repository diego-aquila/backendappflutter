import { Injectable } from '@nestjs/common';
import { CreateExamUserDto } from './dto/create-exam-user.dto';
import { UpdateExamUserDto } from './dto/update-exam-user.dto';
import { ExamUserRepository } from './repositories/examUser.respository';

@Injectable()
export class ExamUserService {
  constructor(private readonly examUserRepository: ExamUserRepository) {}
  create(createExamUserDto: CreateExamUserDto) {
    return this.examUserRepository.create(createExamUserDto);
  }

  findAll() {
    return this.examUserRepository.findAll();
  }

  findOne(id: number) {
    return this.examUserRepository.findOne(id);
  }

  update(id: number, updateExamUserDto: UpdateExamUserDto) {
    return this.examUserRepository.update(id, updateExamUserDto);
  }

  remove(id: number) {
    return this.examUserRepository.remove(id);
  }
}
