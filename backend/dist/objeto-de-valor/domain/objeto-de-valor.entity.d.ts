import { Automotor } from 'src/automotores/domain/automotor.entity';
import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';
export declare class ObjetoDeValor {
    id: number;
    tipo: string;
    codigo: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
    automotor: Automotor;
    vinculos: VinculoSujetoObjeto[];
}
