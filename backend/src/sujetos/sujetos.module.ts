import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SujetosService } from './sujetos.service';
import { SujetosController } from './sujetos.controller';
import { Sujeto } from './domain/sujeto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sujeto])],
  controllers: [SujetosController],
  providers: [SujetosService],
})
export class SujetosModule {}