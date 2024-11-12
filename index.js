import app from './src/app.js';
import { logger } from './src/config/logger.js';
import { port } from './src/utils/port.js';

app.listen(port, () => {
  logger.info(`Server está rodando em http://localhost:${port}`);
});
