import { Plans } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class PlanEntity implements Plans {
  id: number;
  name: string;
  price: Decimal;
}
