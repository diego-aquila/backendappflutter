import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MuralService } from '../services/mural.service';
import { CreateMuralDto } from '../dto/create-mural.dto';
import { UpdateMuralDto } from '../dto/update-mural.dto';

@Controller('mural')
export class MuralController {
  constructor(private readonly muralService: MuralService) {}

  @Post()
  create(@Body() createMuralDto: CreateMuralDto) {
    return this.muralService.create(createMuralDto);
  }

  @Get()
  findAll() {
    return this.muralService.findAll();
  }
  @Get('byclass')
  findByClass() {
    return this.muralService.findByClass();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.muralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuralDto: UpdateMuralDto) {
    return this.muralService.update(+id, updateMuralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.muralService.remove(+id);
  }
}
