import { Repository } from 'typeorm';
import { Automotor } from './domain/automotor.entity';
import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';
import { Sujeto } from 'src/sujetos/domain/sujeto.entity';
import { CreateAutomotorDto } from './dtos/create-automotor.dto';
import { UpdateAutomotorDto } from './dtos/update-automotor.dto';
import { AutomotorDto } from './dtos/automotor.dto';
export declare class AutomotoresService {
    private automotorRepo;
    private objetoRepo;
    private vinculoRepo;
    private sujetoRepo;
    constructor(automotorRepo: Repository<Automotor>, objetoRepo: Repository<ObjetoDeValor>, vinculoRepo: Repository<VinculoSujetoObjeto>, sujetoRepo: Repository<Sujeto>);
    createAutomotor(dto: CreateAutomotorDto): Promise<void>;
    updateAutomotor(dominio: string, dto: UpdateAutomotorDto): Promise<void>;
    deleteAutomotor(dominio: string): Promise<void>;
    getAllAutomotores(): Promise<AutomotorDto[]>;
    getAutomotorByDominio(dominio: string): Promise<{
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
    private getAutomotorDto;
    private setNewOwnerToObjetoDeValor;
    private validateFechaFabricacion;
    private createAutomotorEntity;
    private updateAutomotorEntity;
    private closePreviousVinculo;
    private createNewVinculo;
    private validateDominio;
}
