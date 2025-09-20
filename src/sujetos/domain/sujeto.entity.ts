import { VinculoSujetoObjeto } from 'src/vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('Sujeto')
export class Sujeto {
  @PrimaryGeneratedColumn({ name: 'spo_id', type: 'bigint' })
  id: number;

  @Column({ name: 'spo_cuit', type: 'varchar', length: 11, unique: true })
  cuit: string;

  @Column({ name: 'spo_denominacion', type: 'varchar', length: 160 })
  denominacion: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
  
  @OneToMany(
    () => VinculoSujetoObjeto,
    (vinculo) => vinculo.objetoValor,
  )
  
  vinculos: VinculoSujetoObjeto[];
}