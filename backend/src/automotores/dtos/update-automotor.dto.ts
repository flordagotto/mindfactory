import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, Matches, MaxLength } from 'class-validator';
import { CuitIsValid } from 'src/sujetos/validators/sujeto.validator';

export class UpdateAutomotorDto {
  @ApiProperty({ example: '8ABCD123456789XYZ', description: 'Número de chasis' })
  @IsOptional()
  @IsString()
  @MaxLength(25)
  numeroChasis?: string;

  @ApiProperty({ example: 'MTR987654321', description: 'Número de motor' })
  @IsOptional()
  @IsString()
  @MaxLength(25)
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
  fechaFabricacion?: string;

  @ApiProperty({ example: '20304050607', description: 'CUIT del dueño del automotor' })
  @IsString()
  @IsOptional()
  @CuitIsValid()
  cuitDuenio?: string;
}
