const charactersRouter = require('./routes/charactersRouter');
const hatRouter = require('./routes/hatRouter');

function routes(app) {
  app.use('/api/v1/characters', charactersRouter);
  app.use('/api/v1/hat', hatRouter);
}

module.exports = routes;
