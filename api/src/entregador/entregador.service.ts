import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Entregador } from './entregador.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>,
  ) {}

  async createEntregador(dto: Object): Promise<Entregador> {
    return await this.entregadorRepository.save(dto);
  }

  async findOneEntregador(id: number): Promise<Entregador>{
      return await this.entregadorRepository.findOne(id);
  }

  async findAll(): Promise<Entregador[]>{
      return await this.entregadorRepository.find();
  }

  async updateEntregador(id: number, dto: Object): Promise<UpdateResult>{
      return await this.entregadorRepository.update(id, dto);
  }

  async deleteEntregador(id: number): Promise<UpdateResult>{
      return await this.entregadorRepository.softDelete(id);
  }
}
