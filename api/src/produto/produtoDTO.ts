import {Endereco} from '../endereco/endereco.entity'
export default class ProdutoDTO{
    agendamento: Date;
    enderecoColeta: Endereco;
    enderecoEntrega: Endereco;

}