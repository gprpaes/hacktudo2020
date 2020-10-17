import { Entregador } from 'src/entregador/entregador.entity';
import { Produto } from 'src/produto/produto.entity';
import { WorkingDays } from 'src/working-days/working-days.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Itinerario {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => WorkingDays)
  @JoinColumn({ name: 'working_days_id' })
  workingDays: WorkingDays;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date' })
  endDate: Date;

  @Column({ default: true })
  enabled: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modified: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @Column()
  deleted: boolean;

  @OneToMany(
    () => Produto,
    produto => produto.itinerario,
  )
  produtos: Produto[];

  @ManyToOne(
    () => Entregador,
    entregador => entregador.itinerarios,
  )
  entregador: Entregador;
}
