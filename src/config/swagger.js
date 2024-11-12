import swaggerJsdoc from 'swagger-jsdoc';
import { baseUrl } from '../utils/baseUrl.js';
import config from './enviroments.js';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CRM API - Ploomes',
      version: '1.0.0',
      description: 'Integração com Ploomes',
    },
    servers: [
      {
        url: `http://localhost:${config.PORT}${baseUrl}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

export const swaggerDocsSetup = swaggerJsdoc(swaggerOptions);
