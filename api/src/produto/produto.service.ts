import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Repository } from 'typeorm';
import ProdutoDTO from './produtoDTO';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto) private produtoRepository: Repository<Produto>,
  ) {}

  async createProduto(dto: ProdutoDTO): Promise<Produto> {
    return await this.produtoRepository.save(dto);
  }
}
