import { CreateAutomotorDto } from './dtos/create-automotor.dto';
import { UpdateAutomotorDto } from './dtos/update-automotor.dto';
import { AutomotoresService } from './automotores.service';
export declare class AutomotoresController {
    private readonly automotoresService;
    constructor(automotoresService: AutomotoresService);
    create(dto: CreateAutomotorDto): Promise<void>;
    update(dominio: string, dto: UpdateAutomotorDto): Promise<void>;
    delete(dominio: string): Promise<void>;
    get(): Promise<import("./dtos/automotor.dto").AutomotorDto[]>;
    getByDominio(dominio: string): Promise<{
        id: number;
        dominio: string;
        numeroChasis: string | undefined;
        numeroMotor: string | undefined;
        color: string | undefined;
        fechaFabricacion: number;
        fechaAltoRegistro: Date;
        objetoDeValor: {
            id: number;
            tipo: string;
            codigo: string;
            descripcion: string;
        };
        sujeto: {
            id: number;
            cuit: string;
            denominacion: string;
        } | null;
        vinculos: {
            tipoVinculo: string;
            porcentaje: number;
            responsable: string;
            fechaInicio: Date;
            fechaFin: Date | undefined;
        }[];
    }>;
}
