const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id do personagem invalido' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
    const personagen = req.body;
    if (!personagen || !personagen.name || !personagen.foto) {
      return res
        .status(404)
        .send({ message: 'Envie todos os dados dos personaegns' });
    }
    next();
};

module.exports = {
  validObjectBody,
  validId,
};
