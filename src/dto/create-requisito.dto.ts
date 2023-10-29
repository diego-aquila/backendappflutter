import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRequisitoDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
