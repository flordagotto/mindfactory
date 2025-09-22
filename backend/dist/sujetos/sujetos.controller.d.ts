import { SujetosService } from './sujetos.service';
import { CreateSujetoDto } from './dtos/create-sujeto.dto';
export declare class SujetosController {
    private readonly sujetosService;
    constructor(sujetosService: SujetosService);
    create(dto: CreateSujetoDto): Promise<import("./domain/sujeto.entity").Sujeto>;
    findByCuit(cuit: string): Promise<import("./dtos/sujeto.dto").SujetoDto>;
}
