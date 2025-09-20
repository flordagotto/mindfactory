import { PartialType } from '@nestjs/mapped-types';
import { CreateVinculoSujetoObjetoDto } from './create-vinculo-sujeto-objeto.dto';

export class VinculoSujetoObjetoDto extends PartialType(CreateVinculoSujetoObjetoDto) {}
