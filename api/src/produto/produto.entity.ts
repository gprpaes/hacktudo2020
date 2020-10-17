import { Endereco } from 'src/endereco/endereco.entity';
import { Itinerario } from 'src/itinerario/itinerario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany, OneToOne, JoinColumn, ManyToOne
} from 'typeorm';

@Entity()
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

    @ManyToOne(() => Itinerario, itinerario => itinerario.produtos)
    itinerario: Itinerario;


}
