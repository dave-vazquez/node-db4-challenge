const express = require('express');
const recipesRouter = require('./routes/recipes/recipesRoute');
const ingredientsRouter = require('./routes/ingredients/ingredientsRoute');
const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server;
