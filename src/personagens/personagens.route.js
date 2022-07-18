const route = require("express").Router();
const authMiddleware = require("../auth/auth.middleware");
const controllerPersonagens = require("../personagens/personagens.controller");



const {validId, validObjectBody} = require("./personagens.middleware");



route.get("",authMiddleware, controllerPersonagens.findAllPersonagensController);
route.get("/find/:id", validId, controllerPersonagens.findByIdPersonagenController);
route.post('/create', validObjectBody, controllerPersonagens.createPersonagenController);
route.put('/update/:id', validId, validObjectBody, controllerPersonagens.updatePersonagenController);
route.delete('/delete/:id', validId, controllerPersonagens.deletePersonagenController);


module.exports = route;
