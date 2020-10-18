import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Itinerario } from './itinerario.entity';
import ItinerarioDTO from './itinerarioDTO';

@Injectable()
export class ItinerarioService {
  constructor(
    @InjectRepository(Itinerario)
    private itinerarioRepository: Repository<Itinerario>,
  ) {}

  async createItinerario(dto: ItinerarioDTO): Promise<Itinerario> {
    return await this.itinerarioRepository.save(dto);
  }

  async findOne(id: number): Promise<Itinerario> {
    return await this.itinerarioRepository.findOne(id);
  }

  async findAll(): Promise<Itinerario[]> {
    return await this.itinerarioRepository.find();
  }

  async updateItinerario(id: number, dto: ItinerarioDTO): Promise<UpdateResult>{
      return await this.itinerarioRepository.update(id, dto);
  }

  async deleteItinerario(id: number): Promise<UpdateResult>{
      return await this.itinerarioRepository.softDelete(id);
  }
}
