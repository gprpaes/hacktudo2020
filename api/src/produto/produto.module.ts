import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from 'src/endereco/endereco.entity';
import { Itinerario } from 'src/itinerario/itinerario.entity';
import { ProdutoController } from './produto.controller';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Produto, Itinerario, Endereco])],
    controllers:[ProdutoController],
    providers:[ProdutoService],
    exports:[TypeOrmModule]
})
export class ProdutoModule {}
