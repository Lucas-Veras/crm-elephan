import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ploomesAPI = axios.create({
  baseURL: process.env.CRM_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { ploomesAPI };
