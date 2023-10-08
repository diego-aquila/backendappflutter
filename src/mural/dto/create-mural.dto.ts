import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMuralDto {
  constructor() {
    this.date = new Date();
  }

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  classFK: number;
}
