import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateExamUserDto {
  @IsNumber()
  @IsNotEmpty()
  examsFK: number;

  @IsNumber()
  @IsNotEmpty()
  userFK: number;
}
