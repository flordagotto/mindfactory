import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
import { Sujeto } from 'src/sujetos/domain/sujeto.entity';
export declare class VinculoSujetoObjeto {
    id: number;
    ovpId: number;
    spoId: number;
    tipoVinculo: string;
    porcentaje: number;
    responsable: string;
    fechaInicio: Date;
    fechaFin?: Date;
    createdAt: Date;
    objetoValor: ObjetoDeValor;
    sujeto: Sujeto;
}
