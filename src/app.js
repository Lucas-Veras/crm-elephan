import express from 'express';
import { swaggerDocsSetup } from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';
import { loggerMiddleware } from './middlewares/logger.js';

const app = express();

app.use(loggerMiddleware);

const apiUrl = '/api/v1';

app.use(apiUrl, express.json());
app.use(`${apiUrl}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocsSetup));

app.use((err, req, res, next) => {
  errorMiddleware(err, req, res, next);
});

export default app;
