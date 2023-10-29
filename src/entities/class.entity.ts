import { Classes } from '@prisma/client';

export class ClassEntity implements Classes {
  id: number;
  name: string;
}
