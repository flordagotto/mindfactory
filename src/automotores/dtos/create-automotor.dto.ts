import { IsString, Matches, IsOptional, MaxLength, IsDate, Length } from 'class-validator';
import { VehicleDomainIsValid } from '../validators/automotores.validator';
import { CuitIsValid } from 'src/sujetos/validators/sujeto.validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateAutomotorDto {
  @ApiProperty({ example: '12345678901', description: 'CUIT del dueño del automotor' })
  @IsString()
  @Length(11, 11, { message: 'El CUIT debe tener exactamente 11 dígitos' })
  @Matches(/^\d{11}$/, { message: 'El CUIT debe contener solo números' })
  @CuitIsValid()
  cuitDuenio: string;
  
  @ApiProperty({ example: 'AA999AA', description: 'Dominio patente del automotor' })
  @IsString()
  @VehicleDomainIsValid({ message: 'Dominio no cumple el formato requerido' })
  dominio: string;

  @ApiProperty({ example: '8ABCD123456789XYZ', description: 'Número de chasis del automotor' })
  @IsOptional()
  @MaxLength(25)
  @IsString()
  @Matches(/^[A-Z0-9]*$/i, { message: 'Solo letras y números permitidos' })
  numeroChasis?: string;

  @ApiProperty({ example: 'MTR987654321', description: 'Número de motor del automotor' })
  @IsOptional()
  @MaxLength(25)
  @IsString()
  @Matches(/^[A-Z0-9]*$/i, { message: 'Solo letras y números permitidos' })
  numeroMotor?: string;

  @ApiProperty({ example: 'Rojo', description: 'Color del automotor' })
  @IsOptional()
  @IsString()
  @MaxLength(40)
  color?: string;
  
  @ApiProperty({ example: '202509', description: 'Fecha de fabricación en formato YYYYMM' })
  @IsOptional()
  @IsString()
  @Length(6, 6, { message: 'La fecha de fabricación debe tener exactamente 6 caracteres (YYYYMM)' })
  @Matches(/^(19|20)\d{2}(0[1-9]|1[0-2])$/, { message: 'La fecha de fabricación debe estar en formato YYYYMM válido' })
  fechaFabricacion: string;
}