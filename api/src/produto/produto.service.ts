import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Repository, UpdateResult } from 'typeorm';
import ProdutoDTO from './produtoDTO';
import {Endereco} from '../endereco/endereco.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto) private produtoRepository: Repository<Produto>,
  ) {}

  async createProduto(dto: ProdutoDTO): Promise<Produto> {
    return await this.produtoRepository.save(dto);
  }

  async findOne(id: number): Promise<Produto>{
      return await this.produtoRepository.findOne(id, {relations: ["enderecoColeta", "enderecoEntrega"]});
  }

  async findAll(): Promise<Produto[]>{
      return await this.produtoRepository.find();
  }

  async deleteOne(id: number): Promise<UpdateResult>{
    return await this.produtoRepository.softDelete(id);
  }

  async updateProduto(id: number, dto: ProdutoDTO): Promise<UpdateResult>{
      return await this.produtoRepository.update(id, dto);
  }
}
