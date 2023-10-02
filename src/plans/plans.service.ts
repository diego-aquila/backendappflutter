import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlansRepository } from './repositories/plans.repository';

@Injectable()
export class PlansService {
  constructor(private readonly planRepository: PlansRepository) {}
  create(createPlanDto: CreatePlanDto) {
    return this.planRepository.create(createPlanDto);
  }

  findAll() {
    return this.planRepository.findAll();
  }

  findOne(id: number) {
    return this.planRepository.findOne(id);
  }

  findUsersByPlans(id: number) {
    return this.planRepository.findUsersByPlans(id);
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return this.planRepository.update(id, updatePlanDto);
  }

  remove(id: number) {
    return this.planRepository.remove(id);
  }
}
