import { ObjetoDeValor } from 'src/objeto-de-valor/domain/objeto-de-valor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('Automotores') 
export class Automotor {
  @PrimaryGeneratedColumn({ name: 'atr_id', type: 'bigint' })
  id: number;

  @Column({ name: 'atr_ovp_id', type: 'int' })
  atr_ovp_id: number;

  @Column({ name: 'atr_dominio', type: 'varchar', length: 8 })
  dominio: string;

  @Column({ name: 'atr_numero_chasis', type: 'varchar', length: 25 })
  numeroChasis: string;

  @Column({ name: 'atr_numero_motor', type: 'varchar', length: 25 })
  numeroMotor: string;

  @Column({ name: 'atr_color', type: 'varchar', length: 40 })
  color: string;

  @Column({ name: 'atr_fecha_fabricacion', type: 'int' })
  fechaFabricacion: number;

  @Column({ name: 'atr_fecha_alta_registro', type: 'timestamptz' })
  fechaAltaRegistro: Date;
  
  @OneToOne(() => ObjetoDeValor, (ovp) => ovp.automotor, { cascade: true })
  @JoinColumn({ name: 'atr_ovp_id' })
  objetoValor: ObjetoDeValor;
}