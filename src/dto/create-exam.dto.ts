import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExamDto {
  @IsNotEmpty()
  data: Date;

  @IsString()
  @IsNotEmpty()
  name: string;
}
