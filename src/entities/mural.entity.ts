import { Mural } from '@prisma/client';

export class MuralEntity implements Mural {
  id: number;
  date: Date;
  title: string;
  classFK: number;
}
