const mongoose = require('mongoose');
const personagensService = require('./personagens.service');



// todos os personagens
const findAllPersonagensController = async (req, res) => {
  const allpersonagens = await personagensService.findAllPersonagensService();

  if (allpersonagens.length == 0) {
    return res.status(400).send({ message: 'Nenhum personagen cadastrado' });
  }
  res.send(allpersonagens);
};

// id dos personagens
const findByIdPersonagenController =  async (req, res) => {
  const idParam = req.params.id;

  const chosenPersonagen =
    await personagensService.findByIdPersonagenService(idParam);
  if (!idParam) {
    return res
      .status(404)
      .send({
        message: 'Personagen não encontrado, verifiquei id no all-personagens',
      });
  }

  res.send(chosenPersonagen);
};

// cria personagens
const createPersonagenController = async (req, res) => {
  const personagen = req.body;
  const newPersonagen = await personagensService.createPersonagenService(personagen);
  res.status(201).send(newPersonagen);
};

// edita personagens
const updatePersonagenController = async (req, res) => {
  const idParam = req.params.id;
  const personagenEdited = req.body;
  const updatePersonagen = await personagensService.updatePersonagenService(
    idParam,
    personagenEdited,
  );
  res.send(updatePersonagen);
};




// deleta personagens
const deletePersonagenController = async (req, res) => {
  const idParam = req.params.id;  
  await personagensService.deletePersonagenService(idParam)
  res.send({ message: "personagen deletado com sucesso!!!" });

};


module.exports = {
  findAllPersonagensController,
  findByIdPersonagenController,
  createPersonagenController,
  updatePersonagenController,
  deletePersonagenController,
};


