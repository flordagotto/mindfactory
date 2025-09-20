import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { CuitIsValid } from '../validators/sujeto.validator';

export class CreateSujetoDto {
  @IsString()
  @Length(11, 11, { message: 'El CUIT debe tener exactamente 11 dígitos' })
  @Matches(/^\d{11}$/, { message: 'El CUIT debe contener solo números' })
  @CuitIsValid()
  spo_cuit: string;

  @IsString()
  @IsNotEmpty({ message: 'La denominación es obligatoria' })
  @Length(1, 160, { message: 'La denominación debe tener entre 1 y 160 caracteres' })
  spo_denominacion: string;
}