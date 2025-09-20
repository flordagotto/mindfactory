import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { SujetosService } from './sujetos.service';
import { CreateSujetoDto } from './dtos/create-sujeto.dto';

@Controller('sujetos')
export class SujetosController {
  constructor(private readonly sujetosService: SujetosService) {}

  @Post()
  create(@Body() dto: CreateSujetoDto) {
    return this.sujetosService.create(dto);
  }

  @Get('by-cuit')
  findByCuit(@Query('cuit') cuit: string) {
    return this.sujetosService.getByCuit(cuit);
  }
}
