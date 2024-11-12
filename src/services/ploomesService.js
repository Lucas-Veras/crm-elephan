import { ploomesAPI } from '../config/axios.js';

class PloomesService {
  static apiKey = '';

  static setApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  static async authenticate(apiKey) {
    await ploomesAPI.get('/Self', {
      headers: {
        'User-Key': apiKey,
      },
    });
  }

  static async getContacts(email) {
    let filter;

    if (email) filter = `Email eq '${email}'`;

    const response = await ploomesAPI.get('/Contacts', {
      headers: {
        'User-Key': this.apiKey,
      },
      params: {
        $filter: filter,
      },
    });

    return response.data.value;
  }
}

export default PloomesService;
