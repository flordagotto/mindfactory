import { Module } from '@nestjs/common';
import { VinculoSujetoObjeto } from './domain/vinculo-sujeto-objeto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({imports: [TypeOrmModule.forFeature([VinculoSujetoObjeto])]})
export class VinculoSujetoObjetoModule {}
