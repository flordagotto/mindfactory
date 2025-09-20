import { IsString, Matches, IsOptional, MaxLength, IsDate } from 'class-validator';
import { VehicleDomainIsValid, DateIsValid } from '../validators/automotores.validator';
import { NumberIsIntegerPositive } from '../common/validators/validator';

export class CreateAutomotorDto {
  @IsString()
  @VehicleDomainIsValid({ message: 'Dominio no cumple el formato requerido' })
  dominio: string;

  @NumberIsIntegerPositive()
  atr_ovp_id: number;

  @IsOptional()
  @MaxLength(25)
  @Matches(/^[A-Z0-9]*$/i, { message: 'Solo letras y números permitidos' })
  numero_chasis?: string;

  @IsOptional()
  @MaxLength(25)
  @Matches(/^[A-Z0-9]*$/i, { message: 'Solo letras y números permitidos' })
  numero_motor?: string;

  @IsOptional()
  @MaxLength(40)
  color?: string;
  
  @DateIsValid({ message: 'La fecha de fabricación no cumple el formato requerido' })
  fecha_fabricacion: Date;
  
  @IsOptional()
  @IsDate({ message: 'Debe ser una fecha válida' })
  fecha_alto_registro: Date;
}