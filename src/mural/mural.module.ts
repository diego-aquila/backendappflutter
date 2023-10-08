import { Module } from '@nestjs/common';
import { MuralService } from './mural.service';
import { MuralController } from './mural.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { MuralRepository } from './repositories/mural.repository';

@Module({
  controllers: [MuralController],
  providers: [MuralService, PrismaService, MuralRepository],
})
export class MuralModule {}
