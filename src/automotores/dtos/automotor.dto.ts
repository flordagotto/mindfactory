import { NumberIsIntegerPositive } from '../../common/validators/validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAutomotorDto } from './create-automotor.dto';

export class AutomotorDto extends PartialType(CreateAutomotorDto) {
  @NumberIsIntegerPositive()
  atr_id: number;
}