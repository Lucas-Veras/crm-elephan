import axios from 'axios';
import dotenv from 'dotenv';
import config from './enviroments.js';

dotenv.config();

const ploomesAPI = axios.create({
  baseURL: config.PLOOMES_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { ploomesAPI };
