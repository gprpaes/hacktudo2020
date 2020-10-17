import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Unique(['rg', 'email'])
@Entity()
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rg: string;

  @Column()
  email: string;
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

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @UpdateDateColumn()
  modified: Date;

  @Column()
  deleted: boolean;
}
