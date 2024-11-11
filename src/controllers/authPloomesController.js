import PloomesService from '../services/ploomesService.js';
import { BadRequestError } from '../utils/api-erros.js';

class AuthPloomesController {
  static connect = async (req, res) => {
    const { apiKey } = req.query;

    if (!apiKey) {
      throw new BadRequestError('Chave não informada');
    }

    await PloomesService.authenticate(apiKey);
    new PloomesService().setApiKey(apiKey);

    res.json({ message: 'Conexão realizada com sucesso' });
  };
}

export default AuthPloomesController;
