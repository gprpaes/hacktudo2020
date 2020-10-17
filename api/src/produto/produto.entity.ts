import { Endereco } from 'src/endereco/endereco.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany, OneToOne, JoinColumn
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

    @OneToOne(Type => Endereco)
    @JoinColumn()
    enderecoColeta: Endereco;

    @OneToOne(Type => Endereco)
    @JoinColumn()
    enderecoEntrega: Endereco;



}
