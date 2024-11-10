const port = 3000;

// import config from './config/database.js';
import app from './src/app.js';
import { logger } from './src/config/logger.js';

app.listen(port, () => {
  logger.info(`Server está rodando em http://localhost:${port}`);
});
