const userService = require('./users.service');
const authService = require('../auth/auth.service');
const createUserController = async (req, res) => {
  const {  name, username, email, password, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    return res
      .status(400)
      .send({ message: ' Por favor envie todos os campos' });
  }
  const foundUser = await userService.findByEmailUserService(email);
  if (foundUser) {
    return res.status(400).send({ message: 'Usuario ja existi' });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));
  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuario' });
  }

  const token = authService.generateToken(user.id);
res.status(201).send({
  user:{
    message: "Usuario criado com sucesso",
    id: user.id,
    name,
    username,
    email,
    avatar,
  },
  token,
});

};
const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();
  if(users.length  === 0) {
    return res.status(400).send({ message: 'Não existem usuario cadastrado' });
  }
  
  res.send({ message: "Todos os usuario cadastrados", users});
};

module.exports = {
  createUserController,
  findAllUserController,
};
