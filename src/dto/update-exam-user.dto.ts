import { PartialType } from '@nestjs/mapped-types';
import { CreateExamUserDto } from './create-exam-user.dto';

export class UpdateExamUserDto extends PartialType(CreateExamUserDto) {}
