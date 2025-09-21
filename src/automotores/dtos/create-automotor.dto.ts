import { IsString, Matches, IsOptional, MaxLength, IsDate, Length } from 'class-validator';
import { VehicleDomainIsValid, DateIsValid } from '../validators/automotores.validator';
import { CuitIsValid } from 'src/sujetos/validators/sujeto.validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateAutomotorDto {
  @ApiProperty({ example: '12345678901', description: 'CUIT del dueño del automotor' })
  @IsString()
  @Length(11, 11, { message: 'El CUIT debe tener exactamente 11 dígitos' })
  @Matches(/^\d{11}$/, { message: 'El CUIT debe contener solo números' })
  @CuitIsValid()
  spo_cuit: string;
  
  @ApiProperty({ example: 'AA999AA', description: 'Dominio patente del automotor' })
  @IsString()
  @VehicleDomainIsValid({ message: 'Dominio no cumple el formato requerido' })
  dominio: string;

  @ApiProperty({ example: '123ABC', description: 'Número de chasis del automotor' })
  @IsOptional()
  @MaxLength(25)
  @Matches(/^[A-Z0-9]*$/i, { message: 'Solo letras y números permitidos' })
  numero_chasis?: string;

  @ApiProperty({ example: '456DEF', description: 'Número de motor del automotor' })
  @IsOptional()
  @MaxLength(25)
  @Matches(/^[A-Z0-9]*$/i, { message: 'Solo letras y números permitidos' })
  numero_motor?: string;

  @ApiProperty({ example: 'Rojo', description: 'Color del automotor' })
  @IsOptional()
  @MaxLength(40)
  color?: string;
  
  @ApiProperty({ example: 200006, description: 'Fecha de fabricación del automotor' })
  @DateIsValid({ message: 'La fecha de fabricación no cumple el formato requerido' })
  fecha_fabricacion: number;
  
  @ApiProperty({ example: '2025/09/20', description: 'Fecha de alta de registro del automotor' })
  @IsOptional()
  @Type(() => Date)  
  @IsDate({ message: 'Debe ser una fecha válida' })
  fecha_alto_registro: Date;
}