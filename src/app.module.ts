import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomotoresModule } from './automotores/automotores.module';
import { SujetosModule } from './sujetos/sujetos.module';
import { ObjetoDeValorController } from './objeto-de-valor/objeto-de-valor.controller';
import { ObjetoDeValorService } from './objeto-de-valor/objeto-de-valor.service';
import { ObjetoDeValorModule } from './objeto-de-valor/objeto-de-valor.module';

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
  controllers: [AppController, ObjetoDeValorController],
  providers: [AppService, ObjetoDeValorService],
})
export class AppModule {}
