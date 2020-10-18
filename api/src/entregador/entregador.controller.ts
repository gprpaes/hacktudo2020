import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('entregador')
export class EntregadorController {
  @Post('store')
  create(@Body() dto: Object) {
    return dto;
  }

  @Get(':id')
  findOne(@Param('id') id: number){
      return id;
  }

  @Get()
  findAll(){
      return 'tudão'
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number){
      return {affected: id};
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() dto:Object){
      return id;
  }
}
