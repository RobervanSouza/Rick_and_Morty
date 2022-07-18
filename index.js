require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./src/personagens/personagens.route');
const connectDatabase = require('./src/database/database');

const userRoute = require('./src/users/users.router');
const authRoute = require('./src/auth/auth.route');

const swaggerRoute = require('./src/swagger/swagger.route');
const port = process.env.PORT || 3001;
const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/characters', routes);
app.use('/users', userRoute);
app.use('/auth', authRoute);

app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
