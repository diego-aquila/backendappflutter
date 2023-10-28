import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../roles/dto/create-role.dto';
import { UpdateRoleDto } from '../roles/dto/update-role.dto';
import { RolesRepository } from '../roles/repositories/roles.repository';

@Injectable()
export class RolesService {
  constructor(private readonly rolesrepository: RolesRepository) {}
  create(createRoleDto: CreateRoleDto) {
    return this.rolesrepository.create(createRoleDto);
  }

  findAll() {
    return this.rolesrepository.findAll();
  }

  findOne(id: number) {
    return this.rolesrepository.findOne(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolesrepository.update(id, updateRoleDto);
  }

  remove(id: number) {
    return this.rolesrepository.remove(id);
  }
}
