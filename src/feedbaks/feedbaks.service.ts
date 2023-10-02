import { Injectable } from '@nestjs/common';
import { CreateFeedbakDto } from './dto/create-feedbak.dto';
import { UpdateFeedbakDto } from './dto/update-feedbak.dto';

@Injectable()
export class FeedbaksService {
  create(createFeedbakDto: CreateFeedbakDto) {
    return 'This action adds a new feedbak';
  }

  findAll() {
    return `This action returns all feedbaks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedbak`;
  }

  update(id: number, updateFeedbakDto: UpdateFeedbakDto) {
    return `This action updates a #${id} feedbak`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedbak`;
  }
}
