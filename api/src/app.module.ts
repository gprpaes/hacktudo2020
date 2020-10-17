import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'
import { EntregadorController } from './entregador/entregador.controller';
import { EntregadorService } from './entregador/entregador.service';
import { EntregadorModule } from './entregador/entregador.module';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { ProdutoModule } from './produto/produto.module';
import { ItinerarioController } from './itinerario/itinerario.controller';
import { ItinerarioService } from './itinerario/itinerario.service';
import { ItinerarioModule } from './itinerario/itinerario.module';
import { EnderecoService } from './endereco/endereco.service';
import { EnderecoController } from './endereco/endereco.controller';
import { EnderecoModule } from './endereco/endereco.module';
import {Entregador} from './entregador/entregador.entity';
import {Produto} from './produto/produto.entity';
import {Endereco} from './endereco/endereco.entity';
import {Itinerario} from './itinerario/itinerario.entity';
import { WorkingDaysController } from './working-days/working-days.controller';
import { WorkingDaysService } from './working-days/working-days.service';
import { WorkingDaysModule } from './working-days/working-days.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URI,
      entities: [Entregador, Itinerario, Produto, Endereco],
      synchronize: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }),
    EntregadorModule,
    ProdutoModule,
    ItinerarioModule,
    EnderecoModule,
    WorkingDaysModule,

  ],
  controllers: [AppController, EntregadorController, ProdutoController, ItinerarioController, EnderecoController, WorkingDaysController],
  providers: [AppService, EntregadorService, ProdutoService, ItinerarioService, EnderecoService, WorkingDaysService],
})
export class AppModule {}
