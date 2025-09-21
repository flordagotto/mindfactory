import { IsString, Matches, IsOptional, MaxLength, IsDate, Length } from 'class-validator';
import { VehicleDomainIsValid, DateIsValid } from '../validators/automotores.validator';
import { NumberIsIntegerPositive } from '../../common/validators/validator';
import { CuitIsValid } from 'src/sujetos/validators/sujeto.validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAutomotorDto {
  @ApiProperty({ example: '12345678901', description: 'CUIT del dueño del automotor' })
  @IsString()
  @Length(11, 11, { message: 'El CUIT debe tener exactamente 11 dígitos' })
  @Matches(/^\d{11}$/, { message: 'El CUIT debe contener solo números' })
  @CuitIsValid()
  spo_cuit: string;
  
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
  fecha_fabricacion: number;
  
  @IsOptional()
  @IsDate({ message: 'Debe ser una fecha válida' })
  fecha_alto_registro: Date;
}