const express = require('express');
const recipesRouter = require('./routes/recipes/recipesRoute');
const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

module.exports = server;
