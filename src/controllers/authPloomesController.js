import PloomesService from '../services/ploomesService.js';

class AuthPloomesController {
  static connect = async (req, res, next) => {
    try {
      const { apiKey } = req.query;

      if (!apiKey) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Chave não informada',
        });
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
