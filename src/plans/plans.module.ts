import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlansRepository } from './repositories/plans.repository';

@Module({
  controllers: [PlansController],
  providers: [PlansService, PrismaService, PlansRepository],
})
export class PlansModule {}
