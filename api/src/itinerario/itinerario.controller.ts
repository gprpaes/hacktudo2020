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
import ItinerarioDTO from './itinerarioDTO';

@Controller('itinerario')
export class ItinerarioController {
  constructor(private itinerarioService: ItinerarioService) {}
  @Post('store')
  create(@Body() dto: ItinerarioDTO) {
    return this.itinerarioService.createItinerario(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itinerarioService.findOne(id);
  }

  @Get()
  findAll() {
    return this.itinerarioService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.itinerarioService.deleteItinerario(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() dto: ItinerarioDTO) {
    return this.itinerarioService.updateItinerario(id, dto)
  }
}
