import { Roles } from '@prisma/client';

export class RoleEntity implements Roles {
  id: number;
  name: string;
}
