const route = require("express").Router();
const controllerPersonagens = require("../personagens/personagens.controller");
const {validId, validObjectBody} = require("./personagens.middleware");

route.get("/personagens", controllerPersonagens.findAllPersonagensController);
route.get("/personagen/:id", validId, controllerPersonagens.findByIdPersonagenController);
route.post('/create',validObjectBody, controllerPersonagens.createPersonagenController);
route.put('/update/:id', validId, validObjectBody, controllerPersonagens.updatePersonagenController);
route.delete('/delete/:id', validId, controllerPersonagens.deletePersonagenController);


module.exports = route;
