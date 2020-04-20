const charactersRouter = require('./routes/charactersRouter');

function routes(app) {
  app.use('/api/v1/characters', charactersRouter);
}

module.exports = routes;
