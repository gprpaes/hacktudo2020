# hacktudo2020
Projeto da equipe Inventa.rio Time B para a Hackathon OLX no Hacktudo 2020


## Endpoints do Entregador ('base-url/entregador/')

### Cadastrar um novo entregador (POST '/store/')

body(JSON): 
```
    urlFoto: string,
    nome: string,
    "cidade": string,
    senha: string,
    rg: string,
    veiculo: string,
	  email: string,
    telefone: string

 ```
 
### Editar os dados de um Entregador (PUT '/:id')

body(JSON): 
```
    urlFoto: string,
    nome: string,
    "cidade": string,
    senha: string,
    rg: string,
    veiculo: string,
	  email: string,
    telefone: string

 ```
 
 ### Retornar todos os Entregadores (GET '/') 
 
 ### Retornar um Entregador (GET '/:id'/)
 
 ### Deletar um Entregador (DELETE '/:id')
