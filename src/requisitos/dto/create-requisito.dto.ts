import { IsNotEmpty } from 'class-validator';

export class CreateRequisitoDto {
  @IsNotEmpty()
  name: string;
}
