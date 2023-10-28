import { Module } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { RolesController } from './roles.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesRepository } from './repositories/roles.repository';

@Module({
  controllers: [RolesController],
  providers: [RolesService, PrismaService, RolesRepository],
})
export class RolesModule {}
