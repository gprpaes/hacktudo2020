import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingDays } from 'src/working-days/working-days.entity';
import { ItinerarioController } from './itinerario.controller';
import { Itinerario } from './itinerario.entity';
import { ItinerarioService } from './itinerario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Itinerario, WorkingDays])],
  providers: [ItinerarioService],
  controllers: [ItinerarioController],
  exports: [TypeOrmModule],
})
export class ItinerarioModule {}
