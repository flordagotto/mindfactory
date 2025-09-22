import {
  IsInt,
  IsPositive,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
  IsIn,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateVinculoSujetoObjetoDto {
  @IsInt()
  @IsPositive()
  vso_ovp_id: number; 

  @IsInt()
  @IsPositive()
  vso_spo_id: number;

  @IsString()
  @MaxLength(30)
  vso_tipo_vinculo: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(100)
  vso_porcentaje: number;

  @IsIn(['S', 'N'])
  vso_responsable: string;

  @IsDateString()
  vso_fecha_inicio: Date;

  @IsOptional()
  @IsDateString()
  vso_fecha_fin?: Date;
}
