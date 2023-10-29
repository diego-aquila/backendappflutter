import { Injectable } from '@nestjs/common';
import { CreateMuralDto } from '../dto/create-mural.dto';
import { UpdateMuralDto } from '../dto/update-mural.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MuralEntity } from '../entities/mural.entity';

@Injectable()
export class MuralRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMuralDto: CreateMuralDto): Promise<MuralEntity> {
    return this.prisma.mural.create({
      data: createMuralDto,
    });
  }

  async findAll(): Promise<MuralEntity[]> {
    return this.prisma.mural.findMany();
  }

  async findByClass() {
    return this.prisma.mural.findMany({
      select: {
        id: false,
        title: true,
        classFK: false,
        date: true,
        class: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<MuralEntity> {
    return this.prisma.mural.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateMuralDto: UpdateMuralDto,
  ): Promise<MuralEntity> {
    return this.prisma.mural.update({
      where: {
        id,
      },
      data: updateMuralDto,
    });
  }

  remove(id: number): Promise<MuralEntity> {
    return this.prisma.mural.delete({
      where: {
        id,
      },
    });
  }
}
