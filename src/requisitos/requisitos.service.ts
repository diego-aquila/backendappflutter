import { Injectable } from '@nestjs/common';
import { CreateRequisitoDto } from './dto/create-requisito.dto';
import { UpdateRequisitoDto } from './dto/update-requisito.dto';
import { RequisitosRepository } from './repositories/requisitos.repository';

@Injectable()
export class RequisitosService {
  constructor(private readonly repository: RequisitosRepository) {}
  create(createRequisitoDto: CreateRequisitoDto) {
    return this.repository.create(createRequisitoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateRequisitoDto: UpdateRequisitoDto) {
    return this.repository.update(id, updateRequisitoDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
