import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomotoresModule } from './automotores/automotores.module';
import { SujetosModule } from './sujetos/sujetos.module';
import { ObjetoDeValorController } from './objeto-de-valor/objeto-de-valor.controller';
import { ObjetoDeValorService } from './objeto-de-valor/objeto-de-valor.service';
import { ObjetoDeValorModule } from './objeto-de-valor/objeto-de-valor.module';
import { SujetosController } from './sujetos/sujetos.controller';
import { SujetosService } from './sujetos/sujetos.service';
import { AutomotoresService } from './automotores/automotores.service';
import { AutomotoresController } from './automotores/automotores.controller';

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
      synchronize: true,       
    }),
    AutomotoresModule,
    SujetosModule,
    ObjetoDeValorModule,
  ],
  controllers: [SujetosController, ObjetoDeValorController, AutomotoresController],
  providers: [SujetosService, ObjetoDeValorService, AutomotoresService],
})
export class AppModule {}
