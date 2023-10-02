import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  celphone: string;

  @IsNotEmpty()
  @IsNumber()
  classFK: number;

  @IsNotEmpty()
  @IsNumber()
  roleFK: number;

  @IsNotEmpty()
  @IsNumber()
  planFK: number;
}
