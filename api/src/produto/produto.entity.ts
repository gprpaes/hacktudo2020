import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';


export class Produto{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    agendamento: Date;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @DeleteDateColumn({name: "deleted_at"})
    deletedAt: Date;

    @Column()
    deleted: boolean;

    
}
