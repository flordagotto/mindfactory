import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Automotor } from './domain/automotor.entity';
import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';
import { Sujeto } from 'src/sujetos/domain/sujeto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAutomotorDto } from './dtos/create-automotor.dto';
import { UpdateAutomotorDto } from './dtos/update-automotor.dto';

@Injectable()
export class AutomotoresService {
    constructor(
        @InjectRepository(Automotor) private automotorRepo: Repository<Automotor>,
        @InjectRepository(ObjetoDeValor) private objetoRepo: Repository<ObjetoDeValor>,
        @InjectRepository(VinculoSujetoObjeto) private vinculoRepo: Repository<VinculoSujetoObjeto>,
        @InjectRepository(Sujeto) private sujetoRepo: Repository<Sujeto>,
    ) {}

  async createAutomotor(dto: CreateAutomotorDto) {
    await this.validateDominio(dto.dominio);

    const sujeto = await this.sujetoRepo.findOneBy({ cuit: dto.spo_cuit });
    if (!sujeto) throw new UnprocessableEntityException('No existe sujeto con ese CUIT');

    this.validateFechaFabricacion(dto.fecha_fabricacion);

    let objeto = await this.objetoRepo.findOne({ where: { tipo: 'AUTOMOTOR', codigo: dto.dominio } });

    if (!objeto) {
        objeto = this.objetoRepo.create({ tipo: 'AUTOMOTOR', codigo: dto.dominio, descripcion: `Automotor ${dto.dominio}` });
        objeto = await this.objetoRepo.save(objeto);
    }

    await this.createAutomotorEntity(dto, objeto);
    await this.setNewOwnerToObjetoDeValor(objeto, sujeto);
  }

  async updateAutomotor(dominio: string, dto: UpdateAutomotorDto){
    let automotor = await this.automotorRepo.findOne({ where: { dominio: dominio }, relations: ['objetoValor'] });
        
    if (!automotor) throw new NotFoundException(`Automotor con dominio ${dominio} no encontrado`);
    
    const sujeto = await this.sujetoRepo.findOneBy({ cuit: dto.cuitDuenio });
    if (!sujeto) throw new UnprocessableEntityException('No existe sujeto con ese CUIT');

    let objeto = await this.objetoRepo.findOne({ where: { tipo: 'AUTOMOTOR', codigo: dominio } });
    if (!objeto) throw new UnprocessableEntityException('No existe objeto de valor asociado al automotor');

    await this.updateAutomotorEntity(dto, automotor);
    await this.setNewOwnerToObjetoDeValor(objeto, sujeto);
  }

  private async setNewOwnerToObjetoDeValor(objeto: ObjetoDeValor, sujeto: Sujeto){
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

  private async createAutomotorEntity(dto: CreateAutomotorDto, objeto: ObjetoDeValor){
    let automotor = this.automotorRepo.create({
      dominio: dto.dominio,
      numeroChasis: dto.numero_chasis,
      numeroMotor: dto.numero_motor,
      color: dto.color,
      fechaFabricacion: dto.fecha_fabricacion,
      objetoValor: objeto,
    });
    
    automotor = await this.automotorRepo.save(automotor);
  }

  private async updateAutomotorEntity(dto: UpdateAutomotorDto, oldAutomotor: Automotor){
    if(dto.numeroChasis)
      oldAutomotor.numeroChasis = dto.numeroChasis;

    if(dto.numeroMotor)
      oldAutomotor.numeroMotor = dto.numeroMotor;

    if(dto.color)
      oldAutomotor.color = dto.color;

    if(dto.fechaFabricacion){
      this.validateFechaFabricacion(dto.fechaFabricacion);
      oldAutomotor.fechaFabricacion = dto.fechaFabricacion;
    }
    
    return await this.automotorRepo.save(oldAutomotor);
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

  private async validateDominio(dominio: string){
    const automotor = await this.automotorRepo.findOne({ where: { dominio: dominio } });
    if (automotor) throw new UnprocessableEntityException(`Ya existe un automotor con el dominio ${dominio}`);
  }
}
