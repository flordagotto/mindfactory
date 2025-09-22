import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
export declare class Automotor {
    id: number;
    atr_ovp_id: number;
    dominio: string;
    numeroChasis?: string | undefined;
    numeroMotor?: string | undefined;
    color?: string | undefined;
    fechaFabricacion: number;
    fechaAltaRegistro: Date;
    objetoValor: ObjetoDeValor;
}
