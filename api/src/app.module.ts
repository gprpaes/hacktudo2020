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



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URI,
      entities: [],
      synchronize: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }),
    EntregadorModule,
    ProdutoModule,
    ItinerarioModule,

  ],
  controllers: [AppController, EntregadorController, ProdutoController, ItinerarioController],
  providers: [AppService, EntregadorService, ProdutoService, ItinerarioService],
})
export class AppModule {}
