import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassesRepository } from './repositories/classes.repository';

@Injectable()
export class ClassesService {
  constructor(private readonly classesRepository: ClassesRepository) {}
  create(createClassDto: CreateClassDto) {
    return this.classesRepository.create(createClassDto);
  }

  findAll() {
    return this.classesRepository.findAll();
  }

  findOne(id: number) {
    return this.classesRepository.findOne(id);
  }

  findUsersByClasses(id: number) {
    return this.classesRepository.findUsersByClasses(id);
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.classesRepository.update(id, updateClassDto);
  }

  remove(id: number) {
    return this.classesRepository.remove(id);
  }
}
