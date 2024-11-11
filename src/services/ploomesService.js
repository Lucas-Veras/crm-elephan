import { ploomesAPI } from '../config/axios.js';

class PloomesService {
  authHeaders = {
    'User-Key': '',
  };

  setApiKey(apiKey) {
    this.authHeaders['User-Key'] = apiKey;
  }

  static async authenticate(apiKey) {
    await ploomesAPI.get('/Self', {
      headers: {
        'User-Key': apiKey,
      },
    });
  }
}

export default PloomesService;
