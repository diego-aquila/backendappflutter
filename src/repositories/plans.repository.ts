import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from '../dto/create-plan.dto';
import { UpdatePlanDto } from '../dto/update-plan.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlanEntity } from '../entities/plan.entity';

@Injectable()
export class PlansRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPlanDto: CreatePlanDto): Promise<PlanEntity> {
    return this.prisma.plans.create({
      data: createPlanDto,
    });
  }

  async findAll(): Promise<PlanEntity[]> {
    return this.prisma.plans.findMany();
  }

  async findOne(id: number): Promise<PlanEntity> {
    return this.prisma.plans.findUnique({
      where: {
        id,
      },
      include: {
        Users: true,
      },
    });
  }

  async findUsersByPlans(id: number): Promise<PlanEntity> {
    return this.prisma.plans.findUnique({
      where: {
        id,
      },
      include: {
        Users: {
          select: {
            name: true,
            cpf: true,
          },
        },
      },
    });
  }

  async update(id: number, updatePlanDto: UpdatePlanDto): Promise<PlanEntity> {
    return this.prisma.plans.update({
      where: {
        id,
      },
      data: updatePlanDto,
    });
  }

  remove(id: number): Promise<PlanEntity> {
    return this.prisma.plans.delete({
      where: { id },
    });
  }
}
