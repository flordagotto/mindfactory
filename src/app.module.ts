import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomotoresModule } from './automotores/automotores.module';
import { SujetosModule } from './sujetos/sujetos.module';
import { ObjetoDeValorModule } from './objeto-de-valor/objeto-de-valor.module';
import { VinculoSujetoObjetoModule } from './vinculo-sujeto-objeto/vinculo-sujeto-objeto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mindfactory',
      autoLoadEntities: true,  
      synchronize: false,       
    }),
    AutomotoresModule,
    SujetosModule,
    ObjetoDeValorModule,
    VinculoSujetoObjetoModule
  ]
})
export class AppModule {}
