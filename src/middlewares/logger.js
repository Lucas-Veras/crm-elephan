import { logger } from '../config/logger.js';

export const loggerMiddleware = (req, res, next) => {
  res.on('finish', () => {
    logger.info(`${req.method} ${req.path} status: ${res.statusCode}`);
  });
  next();
};
