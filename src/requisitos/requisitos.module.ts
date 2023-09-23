import { Module } from '@nestjs/common';
import { RequisitosService } from './requisitos.service';
import { RequisitosController } from './requisitos.controller';
import { RequisitosRepository } from 'src/users/repositories/requisitos.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RequisitosController],
  providers: [RequisitosService, PrismaService, RequisitosRepository],
})
export class RequisitosModule {}
