const mongoose = require('mongoose');
const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb conectado!!!'))
    .catch((error) => console.log(`Erro ao conectar o MongoDb conectado!!! erro: ${error.message}`));
};

module.exports = connectDatabase;
