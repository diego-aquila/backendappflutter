import { Module } from '@nestjs/common';
import { RequisitosService } from '../services/requisitos.service';
import { RequisitosController } from '../controllers/requisitos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequisitosRepository } from '../repositories/requisitos.repository';

@Module({
  controllers: [RequisitosController],
  providers: [RequisitosService, PrismaService, RequisitosRepository],
})
export class RequisitosModule {}
