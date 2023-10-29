import { Module } from '@nestjs/common';
import { ClassesService } from '../services/classes.service';
import { ClassesController } from '../controllers/classes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClassesRepository } from '../repositories/classes.repository';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService, PrismaService, ClassesRepository],
})
export class ClassesModule {}
