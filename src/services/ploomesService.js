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
        $expand: 'Company',
      },
    });

    return response.data.value;
  }

  static async getDealsByContactId(id) {
    let filter = `ContactId eq ${id}`;
    const response = await ploomesAPI.get(`/Deals`, {
      headers: {
        'User-Key': this.apiKey,
      },
      params: {
        $filter: filter,
        $expand: 'Status',
      },
    });

    return response.data.value;
  }

  static async getAllPipelines() {
    const response = await ploomesAPI.get('/Deals@Pipelines', {
      headers: {
        'User-Key': this.apiKey,
      },
    });
    return response.data.value;
  }

  static async getDealsByPipeline(pipelineId, statusId) {
    let filter = `PipelineId eq ${pipelineId}`;

    if (statusId) {
      filter += ` and StatusId eq ${statusId}`;
    }
    const response = await ploomesAPI.get('/Deals', {
      headers: {
        'User-Key': this.apiKey,
      },
      params: {
        $filter: filter,
        $expand: 'Status',
      },
    });

    return response.data.value;
  }
}

export default PloomesService;
