import PloomesService from '../services/ploomesService.js';
import { BadRequestError } from '../utils/api-erros.js';

class AuthPloomesController {
  static connect = async (req, res, next) => {
    try {
      const { apiKey } = req.query;

      if (!apiKey) {
        throw new BadRequestError('Chave não informada');
      }

      await PloomesService.authenticate(apiKey);
      PloomesService.setApiKey(apiKey);

      res.json({ message: 'Conexão realizada com sucesso' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthPloomesController;
