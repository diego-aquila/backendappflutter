import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRequisitoDto } from 'src/requisitos/dto/create-requisito.dto';
import { UpdateRequisitoDto } from 'src/requisitos/dto/update-requisito.dto';
import { RequisitoEntity } from 'src/requisitos/entities/requisito.entity';

@Injectable()
export class RequisitosRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createRequisitoDto: CreateRequisitoDto,
  ): Promise<RequisitoEntity> {
    return this.prisma.requisitos.create({
      data: createRequisitoDto,
    });
  }

  async findAll(): Promise<RequisitoEntity[]> {
    return this.prisma.requisitos.findMany();
  }

  async findOne(id: number): Promise<RequisitoEntity> {
    return this.prisma.requisitos.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateRequisitoDto: UpdateRequisitoDto,
  ): Promise<RequisitoEntity> {
    return this.prisma.requisitos.update({
      where: {
        id,
      },
      data: updateRequisitoDto,
    });
  }

  remove(id: number) {
    return this.prisma.requisitos.delete({
      where: {
        id,
      },
    });
  }
}
