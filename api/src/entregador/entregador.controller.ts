import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EntregadorService } from './entregador.service';
import EntregadorDTO from './entregadorDTO';

@Controller('entregador')
export class EntregadorController {
  constructor(private entregadorService: EntregadorService) {}
  @Post('store')
  create(@Body() dto: EntregadorDTO) {
    return this.entregadorService.createEntregador(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.entregadorService.findOneEntregador(id);
  }

  @Get()
  findAll() {
    return this.entregadorService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.entregadorService.deleteEntregador(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() dto: EntregadorDTO) {
    return this.entregadorService.updateEntregador(id, dto)
  }
}
