import { Body, Controller, Post, Put, Query } from '@nestjs/common';
import { AutomotoresService } from './automotores.service';
import { CreateAutomotorDto } from './dtos/create-automotor.dto';

@Controller('automotores')
export class AutomotoresController {
  constructor(private readonly automotoresService: AutomotoresService) {}

  @Post()
  create(@Body() dto: CreateAutomotorDto) {
    return this.automotoresService.createAutomotor(dto);
  }

  @Put()
  update(@Query('dominio') dominio: string, @Body() dto: CreateAutomotorDto) {
    return this.automotoresService.updateAutomotor(dominio, dto);
  }
}
