import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleEntity } from '../entities/role.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    return this.prisma.roles.create({
      data: createRoleDto,
    });
  }

  async findAll(): Promise<RoleEntity[]> {
    return this.prisma.roles.findMany();
  }

  async findOne(id: number): Promise<RoleEntity> {
    return this.prisma.roles.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    return this.prisma.roles.update({
      where: {
        id,
      },
      data: updateRoleDto,
    });
  }

  remove(id: number) {
    return this.prisma.roles.delete({
      where: {
        id,
      },
    });
  }
}
