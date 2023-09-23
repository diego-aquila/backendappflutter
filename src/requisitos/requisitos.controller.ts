import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequisitosService } from './requisitos.service';
import { CreateRequisitoDto } from './dto/create-requisito.dto';
import { UpdateRequisitoDto } from './dto/update-requisito.dto';

@Controller('requisitos')
export class RequisitosController {
  constructor(private readonly requisitosService: RequisitosService) {}

  @Post()
  create(@Body() createRequisitoDto: CreateRequisitoDto) {
    return this.requisitosService.create(createRequisitoDto);
  }

  @Get()
  findAll() {
    return this.requisitosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requisitosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRequisitoDto: UpdateRequisitoDto,
  ) {
    return this.requisitosService.update(+id, updateRequisitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requisitosService.remove(+id);
  }
}
