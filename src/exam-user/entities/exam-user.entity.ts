import { ExamUser } from '@prisma/client';

export class ExamUserEntity implements ExamUser {
  id: number;
  examsFK: number;
  userFK: number;
}
