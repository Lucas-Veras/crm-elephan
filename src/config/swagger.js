import swaggerJsdoc from 'swagger-jsdoc';
import { baseUrl } from '../utils/baseUrl.js';
import { port } from '../utils/port.js';

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
        url: `http://localhost:${port}${baseUrl}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

export const swaggerDocsSetup = swaggerJsdoc(swaggerOptions);
