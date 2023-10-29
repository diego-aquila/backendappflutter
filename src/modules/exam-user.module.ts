import { Module } from '@nestjs/common';
import { ExamUserService } from '../services/exam-user.service';
import { ExamUserController } from '../controllers/exam-user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExamUserRepository } from '../repositories/examUser.respository';

@Module({
  controllers: [ExamUserController],
  providers: [ExamUserService, PrismaService, ExamUserRepository],
})
export class ExamUserModule {}
