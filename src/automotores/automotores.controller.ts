import { Body, Controller, Post } from '@nestjs/common';
import { AutomotoresService } from './automotores.service';
import { CreateAutomotorDto } from './dtos/create-automotor.dto';

@Controller('automotores')
export class AutomotoresController {
  constructor(private readonly automotoresService: AutomotoresService) {}

  @Post()
  create(@Body() dto: CreateAutomotorDto) {
    return this.automotoresService.create(dto);
  }}
