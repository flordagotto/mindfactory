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
      host: process.env.DB_HOST || 'localhost', 
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'mindfactory',
      autoLoadEntities: true,  
      synchronize: true,       
    }),
    AutomotoresModule,
    SujetosModule,
    ObjetoDeValorModule,
    VinculoSujetoObjetoModule
  ]
})
export class AppModule {}
