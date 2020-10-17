import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';


@Entity()
export class Itinerario{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "dias_de_trabalho"})
    diasDeTrabalho: number[];

    @Column({name: "start_date"})
    startDate: Date;

    @Column({name: "end_date"})
    endDate: Date;

    @Column({default: true})
    enabled: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @DeleteDateColumn({name: "deleted_at"})
    deletedAt: Date;

    @Column()
    deleted: boolean;



}