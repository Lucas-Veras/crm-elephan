import express from 'express';
import { swaggerDocsSetup } from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';

const app = express();

const apiUrl = '/api/v1';
app.use(`${apiUrl}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocsSetup));
app.use(apiUrl, express.json());

export default app;
