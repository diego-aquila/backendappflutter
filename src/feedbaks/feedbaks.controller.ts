import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedbaksService } from './feedbaks.service';
import { CreateFeedbakDto } from './dto/create-feedbak.dto';
import { UpdateFeedbakDto } from './dto/update-feedbak.dto';

@Controller('feedbaks')
export class FeedbaksController {
  constructor(private readonly feedbaksService: FeedbaksService) {}

  @Post()
  create(@Body() createFeedbakDto: CreateFeedbakDto) {
    return this.feedbaksService.create(createFeedbakDto);
  }

  @Get()
  findAll() {
    return this.feedbaksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbaksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeedbakDto: UpdateFeedbakDto) {
    return this.feedbaksService.update(+id, updateFeedbakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbaksService.remove(+id);
  }
}
