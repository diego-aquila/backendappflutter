import { Injectable } from '@nestjs/common';
import { CreateExamUserDto } from '../dto/create-exam-user.dto';
import { UpdateExamUserDto } from '../dto/update-exam-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExamUserEntity } from '../entities/exam-user.entity';

@Injectable()
export class ExamUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createExamUserDto: CreateExamUserDto): Promise<ExamUserEntity> {
    return this.prisma.examUser.create({
      data: createExamUserDto,
    });
  }

  async findAll(): Promise<ExamUserEntity[]> {
    return this.prisma.examUser.findMany();
  }

  async findOne(id: number): Promise<ExamUserEntity> {
    return this.prisma.examUser.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateExamUserDto: UpdateExamUserDto,
  ): Promise<ExamUserEntity> {
    return this.prisma.examUser.update({
      where: {
        id,
      },
      data: updateExamUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.examUser.delete({
      where: {
        id,
      },
    });
  }
}
