import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExamsRepository } from './repositories/exams.repository';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService, PrismaService, ExamsRepository],
})
export class ExamsModule {}
