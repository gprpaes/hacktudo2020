import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ItinerarioService } from './itinerario.service';

@Controller('itinerario')
export class ItinerarioController {
  constructor(private itinerarioService: ItinerarioService) {}
  @Post('store')
  create(@Body() dto: Object) {
    //return this.entregadorService.createEntregador(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    //return this.entregadorService.findOneEntregador(id);
  }

  @Get()
  findAll() {
    //return this.entregadorService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    //return this.entregadorService.deleteEntregador(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() dto: Object) {
    //return this.entregadorService.updateEntregador(id, dto)
  }
}
