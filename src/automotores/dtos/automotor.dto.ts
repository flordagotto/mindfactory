import { ObjetoDeValorDto } from 'src/objeto-de-valor/dtos/objeto-de-valor.dto';
import { SujetoDto } from 'src/sujetos/dtos/sujeto.dto';
import { VinculoSujetoObjetoDto } from 'src/vinculo-sujeto-objeto/dtos/vinculo-sujeto-objeto.dto';

export class AutomotorDto{
  id: number;
  dominio: string;
  numeroChasis?: string;
  numeroMotor?: string;
  color?: string;
  fechaFabricacion: number;
  fechaAltoRegistro: Date;
  objetoDeValor: ObjetoDeValorDto;
  sujeto?: SujetoDto | null;
  vinculos?: VinculoSujetoObjetoDto[];
}