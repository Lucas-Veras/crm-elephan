import axios from 'axios';
import { errorMessages } from '../utils/errorMessages.js';

export const errorMiddleware = (err, req, res, next) => {
  if (axios.isAxiosError(err) && err.response) {
    return res.status(err.response.status).json({
      statusCode: err.response.status,
      message: errorMessages[err.response.status] ?? err.response.statusText,
    });
  }

  return res.status(500).json({
    statusCode: 500,
    message: 'Internal Server Error',
  });
};
