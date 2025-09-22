import { IsString, Matches, IsOptional, MaxLength, IsDate, IsNotEmpty, Length } from 'class-validator';

export class CreateObjetoDeValorDto {
  @IsString()
  @IsNotEmpty({ message: 'El tipo es obligatorio' })
  @Length(1, 30, { message: 'El tipo no puede superar los 30 caracteres' })
  ovp_tipo: string;

  @IsString()
  @IsNotEmpty({ message: 'El código es obligatorio' })
  @Length(1, 64, { message: 'El código no puede superar los 64 caracteres' })
  ovp_codigo: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @Length(1, 240, { message: 'La descripción no puede superar los 240 caracteres' })
  ovp_descripcion: string;
}