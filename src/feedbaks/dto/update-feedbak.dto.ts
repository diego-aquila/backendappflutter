import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedbakDto } from './create-feedbak.dto';

export class UpdateFeedbakDto extends PartialType(CreateFeedbakDto) {}
