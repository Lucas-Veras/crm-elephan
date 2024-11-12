import app from './src/app.js';
import config from './src/config/enviroments.js';
import { logger } from './src/config/logger.js';

app.listen(config.PORT, () => {
  logger.info(`O Servidor está rodando em http://localhost:${config.PORT}`);
});
