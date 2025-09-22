import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateAutomotorDto } from './dtos/create-automotor.dto';
import { UpdateAutomotorDto } from './dtos/update-automotor.dto';
import { AutomotoresService } from './automotores.service';

@Controller('automotores')
export class AutomotoresController {
  constructor(private readonly automotoresService: AutomotoresService) {}

  @Post()
  create(@Body() dto: CreateAutomotorDto) {
    return this.automotoresService.createAutomotor(dto);
  }

  @Put(':dominio')
  update(@Param('dominio') dominio: string, @Body() dto: UpdateAutomotorDto) {
    return this.automotoresService.updateAutomotor(dominio, dto);
  }
  
  @Delete()
  delete(@Query('dominio') dominio: string) {
    return this.automotoresService.deleteAutomotor(dominio);
  }
  
  @Get()
  get() {
    return this.automotoresService.getAllAutomotores();
  }
  
  @Get(':dominio')
  getByDominio(@Param('dominio') dominio: string) {
    return this.automotoresService.getAutomotorByDominio(dominio);
  }
}
