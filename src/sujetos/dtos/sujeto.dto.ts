import { PartialType } from '@nestjs/mapped-types';
import { CreateSujetoDto } from './create-sujeto.dto';
import { NumberIsIntegerPositive } from 'src/common/validators/validator';

export class SujetoDto extends PartialType(CreateSujetoDto) {
      @NumberIsIntegerPositive()
      spo_id: number;
}
