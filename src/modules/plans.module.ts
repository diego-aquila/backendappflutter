import { Module } from '@nestjs/common';
import { PlansService } from '../services/plans.service';
import { PlansController } from '../controllers/plans.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlansRepository } from '../repositories/plans.repository';

@Module({
  controllers: [PlansController],
  providers: [PlansService, PrismaService, PlansRepository],
})
export class PlansModule {}
