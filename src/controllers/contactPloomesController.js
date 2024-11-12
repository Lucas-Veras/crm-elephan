import { contactsParser } from '../parsers/contactParser.js';
import { dealsParser } from '../parsers/dealsParser.js';
import PloomesService from '../services/ploomesService.js';
import { BadRequestError } from '../utils/api-erros.js';

class ContacPloomesControler {
  static getContacts = async (req, res, next) => {
    try {
      const { email } = req.query;

      const contacts = await PloomesService.getContacts(email);

      if (contacts.length === 0) {
        res.status(404).json({
          statusCode: 404,
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

  static getDealsByContactId = async (req, res, next) => {
    try {
      const { id } = req.params;

      const deals = await PloomesService.getDealsByContactId(id);

      if (deals.length === 0) {
        res.status(404).json({
          statusCode: 404,
          message: 'Negócios não encontrados',
        });
      }

      const dealsParsed = deals.map(dealsParser);

      return dealsParsed;
    } catch (error) {
      next(error);
    }
  };
}

export { ContacPloomesControler };
