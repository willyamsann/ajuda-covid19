const express = require("express");
const cors = require('cors');
const  routes = require('./routes');
const app = express(); //armazena a aplicação

app.use(cors());
app.use(express.json()); //antes de todas as requisições o corpo da requisição transforma em javascript

app.use(routes);
/**
 * Metodos HTTP:
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Paramentros
 * Query: Parametros  nomeados enviados na rota após "?" (Filtro, Paginação)
 * Route Paramns: Parâmetros utilizados para indentificar recursos
 * Request Body: Corpo da requisição, utilziado para criar ou alterar recursos.
 * 
 */

 /**
  * DB - DataBAse
  * 
  */// '/' rota raiz


app.listen(3333);//a aplicação ouvir a porta 3333 para acesso no localhost