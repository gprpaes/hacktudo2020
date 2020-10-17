import { WorkingDays } from 'src/working-days/working-days.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
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
}
