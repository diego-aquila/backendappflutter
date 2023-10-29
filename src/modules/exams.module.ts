import { Module } from '@nestjs/common';
import { ExamsService } from '../services/exams.service';
import { ExamsController } from '../controllers/exams.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExamsRepository } from '../repositories/exams.repository';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService, PrismaService, ExamsRepository],
})
export class ExamsModule {}
