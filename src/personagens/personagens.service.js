
const Personagen = require("./personagen.models")


// todos os personagens
const findAllPersonagensService = async () => {
 const personagens = await Personagen.find();

  return personagens;
};

// id dos personagens
const findByIdPersonagenService = async (idParam) => {
    const personagen = await Personagen.findById(idParam);
    return personagen;
};

// cria personagens
const createPersonagenService = async (newPersonagen) =>{
    const createPersonagen = await Personagen.create(newPersonagen); 
    return createPersonagen;

};

// edita personagen
const updatePersonagenService = async (id, personagenEdited) =>{
const personagenUpdate = await Personagen.findByIdAndUpdate(id, personagenEdited);
return personagenUpdate;

}

// deleta personagen
const deletePersonagenService = async (id) => {
return await Personagen.findByIdAndDelete(id);
}



module.exports = {
    findAllPersonagensService,
    findByIdPersonagenService,
    createPersonagenService,
    updatePersonagenService,
    deletePersonagenService,

}

