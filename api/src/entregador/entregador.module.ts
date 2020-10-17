import { Module } from '@nestjs/common';
import {EntregadorService} from './entregador.service';
import {EntregadorController} from './entregador.controller';
import {Entregador} from './entregador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from 'src/endereco/endereco.entity';
import { Itinerario } from 'src/itinerario/itinerario.entity';
import { Produto } from 'src/produto/produto.entity';

 
@Module({
    imports:[TypeOrmModule.forFeature([Entregador, Endereco, Itinerario, Produto])],
    providers:[EntregadorService],
    controllers: [EntregadorController],
    exports: [TypeOrmModule]
})
export class EntregadorModule {}
