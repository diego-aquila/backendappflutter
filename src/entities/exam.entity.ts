import { Exams } from '@prisma/client';

export class ExamEntity implements Exams {
  id: number;
  data: Date;
  name: string;
}
