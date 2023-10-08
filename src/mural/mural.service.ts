import { Injectable } from '@nestjs/common';
import { CreateMuralDto } from './dto/create-mural.dto';
import { UpdateMuralDto } from './dto/update-mural.dto';
import { MuralRepository } from './repositories/mural.repository';

@Injectable()
export class MuralService {
  constructor(private readonly muralRepository: MuralRepository) {}
  create(createMuralDto: CreateMuralDto) {
    return this.muralRepository.create(createMuralDto);
  }

  findAll() {
    return this.muralRepository.findAll();
  }

  findByClass() {
    return this.muralRepository.findByClass();
  }

  findOne(id: number) {
    return this.muralRepository.findOne(id);
  }

  update(id: number, updateMuralDto: UpdateMuralDto) {
    return this.muralRepository.update(id, updateMuralDto);
  }

  remove(id: number) {
    return this.muralRepository.remove(id);
  }
}
