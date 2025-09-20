import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
import { Sujeto } from 'src/sujetos/domain/sujeto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('Vinculo_Sujeto_Objeto')
export class VinculoSujetoObjeto {
  @PrimaryGeneratedColumn({ name: 'vso_id', type: 'bigint' })
  id: number;

  @Column({ name: 'vso_ovp_id', type: 'int', length: 8 })
  ovpId: number;

  @Column({ name: 'vso_spo_id', type: 'int', length: 8 })
  spoId: number;

  @Column({ name: 'vso_tipo_vinculo', type: 'varchar', length: 30 })
  tipoVinculo: string;

  @Column({ name: 'vso_porcentaje', type: 'numeric', precision: 5, scale: 2 })
  porcentaje?: number;

  @Column({ name: 'vso_responsable', type: 'char', length: 1, default: '0' })
  responsable: string; 

  @Column({ name: 'vso_fecha_inicio', type: 'date', nullable: true })
  fechaInicio?: Date;

  @Column({ name: 'vso_fecha_fin', type: 'date', nullable: true })
  fechaFin?: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => ObjetoDeValor, (ovp) => ovp.vinculos)
  objetoValor: ObjetoDeValor;

  @ManyToOne(() => Sujeto, (sujeto) => sujeto.vinculos)
  sujeto: Sujeto;
}