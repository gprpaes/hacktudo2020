import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Entregador{

    @Column()
    urlFoto: string;

    @Column()
    nome: string;

    @Column()
    senha: string;

    @Column()
    cidade: string;

    @Column()
    telefone: string;

    @Column()
    veiculo: string;
}