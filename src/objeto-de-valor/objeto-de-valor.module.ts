import { Module } from '@nestjs/common';
import { ObjetoDeValor } from './domain/objeto-de-valor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({imports: [TypeOrmModule.forFeature([ObjetoDeValor])]})
export class ObjetoDeValorModule {}
