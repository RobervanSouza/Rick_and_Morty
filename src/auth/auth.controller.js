require('dotenv').config();
const authService = require('./auth.service');
const bcrypt = require('bcryptjs');
const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginService(email);
  if (!user) {
    return res.status(401).send({ message: 'Usuario não encontrado.' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send({ message: 'Senha invalida' });
  }
  const token = authService.generateToken(user.id);

  res.status(200).send({
    user: {
      message: 'Usuario logado com sucesso',
      name: user.name,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
    },
    token,
  });
};
module.exports = { loginController };
