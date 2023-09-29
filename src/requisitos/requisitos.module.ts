import { Module } from '@nestjs/common';
import { RequisitosService } from './requisitos.service';
import { RequisitosController } from './requisitos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequisitosRepository } from './repositories/requisitos.repository';

@Module({
  controllers: [RequisitosController],
  providers: [RequisitosService, PrismaService, RequisitosRepository],
})
export class RequisitosModule {}
