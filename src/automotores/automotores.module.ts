import { Module } from '@nestjs/common';
import { AutomotoresController } from './automotores.controller';
import { AutomotoresService } from './automotores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automotor } from './domain/automotor.entity';
import { Sujeto } from 'src/sujetos/domain/sujeto.entity';
import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';

@Module(
  {imports: [TypeOrmModule.forFeature([Automotor, Sujeto, ObjetoDeValor, VinculoSujetoObjeto])],
  controllers: [AutomotoresController],
  providers: [AutomotoresService]
})
export class AutomotoresModule {}
