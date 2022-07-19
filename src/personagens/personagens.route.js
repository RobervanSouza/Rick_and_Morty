const route = require('express').Router();
const authMiddleware = require('../auth/auth.middleware');
const controllerPersonagens = require('../personagens/personagens.controller');

const { validId, validObjectBody } = require('./personagens.middleware');

route.get(
  '',
  
  controllerPersonagens.findAllPersonagensController,
);
route.get(
  '/find/:id',
  authMiddleware,
  validId,
  controllerPersonagens.findByIdPersonagenController,
);
route.post(
  '/create',
  authMiddleware,
  validObjectBody,
  controllerPersonagens.createPersonagenController,
);
route.put(
  '/update/:id',
  authMiddleware,
  validId,
  validObjectBody,
  controllerPersonagens.updatePersonagenController,
);
route.delete(
  '/delete/:id',
  authMiddleware,
  validId,
  controllerPersonagens.deletePersonagenController,
);

route.get('/search',authMiddleware, controllerPersonagens.pesquisaPersonagenController);

module.exports = route;
