import { Requisitos } from '@prisma/client';

export class RequisitoEntity implements Requisitos {
  id: number;
  name: string;
}
