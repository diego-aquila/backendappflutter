import { Injectable } from '@nestjs/common';
import { CreateExamDto } from '../dto/create-exam.dto';
import { UpdateExamDto } from '../dto/update-exam.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExamEntity } from '../entities/exam.entity';

@Injectable()
export class ExamsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createExamDto: CreateExamDto): Promise<ExamEntity> {
    return this.prisma.exams.create({
      data: createExamDto,
    });
  }

  async findAll(): Promise<ExamEntity[]> {
    return this.prisma.exams.findMany();
  }

  async findOne(id: number): Promise<ExamEntity> {
    return this.prisma.exams.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateExamDto: UpdateExamDto): Promise<ExamEntity> {
    return this.prisma.exams.update({
      where: {
        id,
      },
      data: updateExamDto,
    });
  }

  async remove(id: number) {
    return this.prisma.exams.delete({
      where: {
        id,
      },
    });
  }
}
