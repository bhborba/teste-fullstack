import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // procura por um usuário que possua o mesmo e-mail informado na requisição
    const userExists = await User.findOne({ where: { email: req.body.email } });

    // se a constante for preenchida, retorna erro dizendo que já existe
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // cria o usuário na base, e pega id, nome e email
    const { id, name, email } = await User.create(req.body);

    // retorna os dados do usuário criado
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
