import { Injectable } from '@nestjs/common';
import { CreateClassDto } from '../dto/create-class.dto';
import { UpdateClassDto } from '../dto/update-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClassEntity } from '../entities/class.entity';

@Injectable()
export class ClassesRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createClassDto: CreateClassDto): Promise<ClassEntity> {
    return this.prisma.classes.create({
      data: createClassDto,
    });
  }

  async findAll(): Promise<ClassEntity[]> {
    return this.prisma.classes.findMany();
  }

  async findOne(id: number): Promise<ClassEntity> {
    return this.prisma.classes.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateClassDto: UpdateClassDto,
  ): Promise<ClassEntity> {
    return this.prisma.classes.update({
      where: {
        id,
      },
      data: updateClassDto,
    });
  }
  remove(id: number) {
    return this.prisma.classes.delete({
      where: {
        id,
      },
    });
  }
}
