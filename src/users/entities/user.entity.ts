import { Users } from '@prisma/client';

export class UserEntity implements Users {
  id: number;
  email: string;
  isActive: boolean;
  name: string;
  cpf: string;
  password: string;
  celphone: string;
  classFK: number;
  roleFK: number;
  planFK: number;
}
