import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExamUserDto {
  @IsNumber()
  @IsNotEmpty()
  examsFK: number;

  @IsString()
  @IsNotEmpty()
  userFK: string;
}
