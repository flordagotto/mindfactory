import { Module } from '@nestjs/common';
import { SujetosService } from './sujetos.service';
import { SujetosController } from './sujetos.controller';

@Module({
  providers: [SujetosService],
  controllers: [SujetosController]
})
export class SujetosModule {}
