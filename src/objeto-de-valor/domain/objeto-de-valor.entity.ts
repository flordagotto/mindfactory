import { Automotor } from 'src/automotores/domain/automotor.entity';
import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity('ObjetoDeValor') 
export class ObjetoDeValor {
  @PrimaryGeneratedColumn({ name: 'ovp_id', type: 'bigint' })
  id: number;

  @Column({ name: 'ovp_tipo', type: 'varchar', length: 30 })
  tipo: string;

  @Column({ name: 'ovp_codigo', type: 'varchar', length: 64 })
  codigo: string;

  @Column({ name: 'ovp_descripcion', type: 'varchar', length: 240 })
  descripcion: string;
  
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
  
  @OneToOne(() => Automotor, (automotor) => automotor.objetoValor)
  automotor: Automotor;
  
  @OneToMany(
    () => VinculoSujetoObjeto,
    (vinculo) => vinculo.objetoValor,
  )

  vinculos: VinculoSujetoObjeto[];
}