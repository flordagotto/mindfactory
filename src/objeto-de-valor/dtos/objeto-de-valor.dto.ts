import { PartialType } from '@nestjs/mapped-types';
import { CreateObjetoDeValorDto } from './create-objeto-de-valor.dto';
import { NumberIsIntegerPositive } from 'src/common/validators/validator';

export class ObjetoDeValorDto extends PartialType(CreateObjetoDeValorDto) {
  @NumberIsIntegerPositive()
  ovp_id: number;
}