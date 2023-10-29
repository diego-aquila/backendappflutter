import { Injectable } from '@nestjs/common';
import { CreateExamDto } from '../dto/create-exam.dto';
import { UpdateExamDto } from '../dto/update-exam.dto';
import { ExamsRepository } from '../repositories/exams.repository';

@Injectable()
export class ExamsService {
  constructor(private readonly examsRepository: ExamsRepository) {}
  create(createExamDto: CreateExamDto) {
    return this.examsRepository.create(createExamDto);
  }

  findAll() {
    return this.examsRepository.findAll();
  }

  findOne(id: number) {
    return this.examsRepository.findOne(id);
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examsRepository.update(id, updateExamDto);
  }

  remove(id: number) {
    return this.examsRepository.remove(id);
  }
}
