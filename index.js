const express = require('express');


const routes = require("./src/personagens/personagens.route")
const connectDatabase = require("./src/database/database")

const port = 3000;
const app = express();

connectDatabase();

app.use(express.json());
app.use("/personagens", routes)



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

