import express from 'express';
import { swaggerDocsSetup } from './config/swagger.js';
import swaggerUi from 'swagger-ui-express';
import { loggerMiddleware } from './middlewares/logger.js';
import { router } from './routes/Router.js';
import { baseUrl } from './utils/baseUrl.js';
import { errorMiddleware } from './middlewares/error.js';

const app = express();

app.use(loggerMiddleware);

app.use(baseUrl, express.json());
app.use(`${baseUrl}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocsSetup));
app.use(router);

app.use((err, req, res, next) => {
  errorMiddleware(err, req, res, next);
});

export default app;
