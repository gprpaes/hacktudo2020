import {
  Controller,
  Put,
  Post,
  Get,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import ProdutoDTO from './produtoDTO';

@Controller('produto')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}
  @Post('store')
  create(@Body() dto: ProdutoDTO) {
    return this.produtoService.createProduto(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.produtoService.findOne(id);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.produtoService.deleteOne(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() dto: ProdutoDTO) {
    return this.produtoService.updateProduto(id, dto)
  }
}
