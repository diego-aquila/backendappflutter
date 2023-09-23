import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClassesRepository } from './repositories/classes.repository';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService, PrismaService, ClassesRepository],
})
export class ClassesModule {}
