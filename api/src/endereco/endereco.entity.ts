import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column({type: "float"})
  latitude: number;

  @Column({type: "float"})
  longitude: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modified: Date;

  @DeleteDateColumn({name: "deleted_at"})
  deletedAt: Date;

  @Column({default: false})
  deleted: boolean;
}
