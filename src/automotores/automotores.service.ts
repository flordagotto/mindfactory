import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Automotor } from './domain/automotor.entity';
import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';
import { Sujeto } from 'src/sujetos/domain/sujeto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAutomotorDto } from './dtos/create-automotor.dto';

@Injectable()
export class AutomotoresService {
    constructor(
        @InjectRepository(Automotor) private automotorRepo: Repository<Automotor>,
        @InjectRepository(ObjetoDeValor) private objetoRepo: Repository<ObjetoDeValor>,
        @InjectRepository(VinculoSujetoObjeto) private vinculoRepo: Repository<VinculoSujetoObjeto>,
        @InjectRepository(Sujeto) private sujetoRepo: Repository<Sujeto>,
    ) {}

    async create(dto: CreateAutomotorDto) {
        const sujeto = await this.sujetoRepo.findOneBy({ cuit: dto.spo_cuit });
        if (!sujeto) throw new UnprocessableEntityException('No existe sujeto con ese CUIT');

        this.validateFechaFabricacion(dto.fecha_fabricacion);

        let objeto = await this.objetoRepo.findOne({ where: { tipo: 'AUTOMOTOR', codigo: dto.dominio } });

        if (!objeto) {
            objeto = this.objetoRepo.create({ tipo: 'AUTOMOTOR', codigo: dto.dominio, descripcion: `Automotor ${dto.dominio}` });
            objeto = await this.objetoRepo.save(objeto);
        }

        await this.updateOrCreateAutomotor(dto, objeto);
        await this.closePreviousVinculo(objeto);
        await this.createNewVinculo(objeto, sujeto);
  }

  private validateFechaFabricacion(fecha_fabricacion: number){
    const fabStr = fecha_fabricacion.toString();
    const anio = Number(fabStr.slice(0, 4));
    const mes = Number(fabStr.slice(4, 6));
    const hoy = new Date();
    
    if (mes < 1 || mes > 12 || anio > hoy.getFullYear() || (anio === hoy.getFullYear() && mes > hoy.getMonth() + 1)) {
        throw new UnprocessableEntityException('Fecha de fabricación inválida');
    }
  }

  private async updateOrCreateAutomotor(dto: CreateAutomotorDto, objeto: ObjetoDeValor){
    let automotor = await this.automotorRepo.findOne({ where: { dominio: dto.dominio }, relations: ['objetoValor'] });
        
    if (automotor) {
        automotor.numeroChasis = dto.numero_chasis;
        automotor.numeroMotor = dto.numero_motor;
        automotor.color = dto.color;
        automotor.fechaFabricacion = dto.fecha_fabricacion;
    } else {
        automotor = this.automotorRepo.create({
            dominio: dto.dominio,
            numeroChasis: dto.numero_chasis,
            numeroMotor: dto.numero_motor,
            color: dto.color,
            fechaFabricacion: dto.fecha_fabricacion,
            objetoValor: objeto,
        });
    }
    
    automotor = await this.automotorRepo.save(automotor);
  }

  private async closePreviousVinculo(objeto: ObjetoDeValor){
    await this.vinculoRepo
      .createQueryBuilder()
      .update(VinculoSujetoObjeto)
      .set({ fechaFin: new Date() })
      .where('vso_ovp_id = :ovpId AND vso_responsable = :resp AND vso_fecha_fin IS NULL', { ovpId: objeto.id, resp: 'S' })
      .execute();
  }

  private async createNewVinculo(objeto: ObjetoDeValor, sujeto: Sujeto){
    const vinculo = this.vinculoRepo.create({
      ovpId: objeto.id,
      spoId: sujeto.id,
      tipoVinculo: 'DUENO',
      porcentaje: 100,
      responsable: 'S',
      fechaInicio: new Date(),
    });

    await this.vinculoRepo.save(vinculo);
  }
}
