import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'working_days' })
export class WorkingDays {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  segunda: boolean;

  @Column({ default: false })
  terca: boolean;

  @Column({ default: false })
  quarta: boolean;

  @Column({ default: false })
  quinta: boolean;

  @Column({ default: false })
  sexta: boolean;

  @Column({ default: false })
  sabado: boolean;

  @Column({ default: false })
  domingo: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modified: Date;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: Date;

  @Column({default: false})
  deleted: boolean;

}
