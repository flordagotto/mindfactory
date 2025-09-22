import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sujeto } from './domain/sujeto.entity';
import { CreateSujetoDto } from './dtos/create-sujeto.dto';
import { SujetoDto } from './dtos/sujeto.dto';

@Injectable()
export class SujetosService {
  constructor(
    @InjectRepository(Sujeto)
    private readonly sujetoRepository: Repository<Sujeto>,
  ) {}

  async create(dto: CreateSujetoDto) {
    const existing = await this.sujetoRepository.findOne({
      where: { cuit: dto.spo_cuit },
    });

    if (existing) {
      throw new UnprocessableEntityException(`Ya existe un sujeto con CUIT ${dto.spo_cuit}`);
    }

    const sujeto: Partial<Sujeto> = {
        cuit: dto.spo_cuit,
        denominacion: dto.spo_denominacion,
    }

    const sujetoEntity = this.sujetoRepository.create(sujeto);

    return this.sujetoRepository.save(sujetoEntity);
  }

  async getByCuit(cuit: string) { 
    var sujetoEntity = await this.sujetoRepository.findOne({ where: { cuit } });

    if (!sujetoEntity) {
      throw new NotFoundException(`Sujeto con cuit ${cuit} no encontrado`);
    }

    var sujetoDto: SujetoDto = {
        id: sujetoEntity.id,
        cuit: sujetoEntity.cuit,
        denominacion: sujetoEntity.denominacion
    }

    return sujetoDto;
  }
}

