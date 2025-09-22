import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';
export declare class Sujeto {
    id: number;
    cuit: string;
    denominacion: string;
    createdAt: Date;
    updatedAt: Date;
    vinculos: VinculoSujetoObjeto[] | null;
}
