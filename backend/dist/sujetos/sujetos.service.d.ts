import { Repository } from 'typeorm';
import { Sujeto } from './domain/sujeto.entity';
import { CreateSujetoDto } from './dtos/create-sujeto.dto';
import { SujetoDto } from './dtos/sujeto.dto';
export declare class SujetosService {
    private readonly sujetoRepository;
    constructor(sujetoRepository: Repository<Sujeto>);
    create(dto: CreateSujetoDto): Promise<Sujeto>;
    getByCuit(cuit: string): Promise<SujetoDto>;
}
