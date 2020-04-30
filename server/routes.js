const charactersRouter = require('./routes/charactersRouter');
const hatRouter = require('./routes/hatRouter');
const housesRouter = require('./routes/housesRouter');
const spellsRouter = require('./routes/spellsRouter');

function routes(app) {
  app.use('/api/v1/characters', charactersRouter);
  app.use('/api/v1/hat', hatRouter);
  app.use('/api/v1/houses', housesRouter);
  app.use('/api/v1/spells', spellsRouter);
}

module.exports = routes;
