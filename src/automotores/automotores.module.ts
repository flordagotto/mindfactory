import { Module } from '@nestjs/common';
import { AutomotoresController } from './automotores.controller';
import { AutomotoresService } from './automotores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automotor } from './domain/automotor.entity';

@Module(
  {imports: [TypeOrmModule.forFeature([Automotor])],
  controllers: [AutomotoresController],
  providers: [AutomotoresService]
})
export class AutomotoresModule {}
