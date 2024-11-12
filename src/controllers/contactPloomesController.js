import { contactsParser } from '../parsers/contactParser.js';
import PloomesService from '../services/ploomesService.js';
import { BadRequestError } from '../utils/api-erros.js';

class ContacPloomesControler {
  static getContacts = async (req, res, next) => {
    try {
      const { email } = req.query;

      const contacts = await PloomesService.getContacts(email);

      if (contacts.length === 0) {
        res.status(404).json({
          statusCode: 401,
          message: 'Contato não encontrado',
        });
      }

      const contactsParsed = contacts.map(contactsParser);

      if (email) return res.json(contactsParsed[0]);

      res.json(contactsParsed);
    } catch (error) {
      next(error);
    }
  };
}

export { ContacPloomesControler };
