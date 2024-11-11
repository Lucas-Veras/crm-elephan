import axios from 'axios';

export const errorMiddleware = (err, req, res, next) => {
  if (err) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  if (axios.isAxiosError(err) && err.response) {
    return res.status(err.response.status).json({
      statusCode: err.response.status,
      message: 'Erro ao chamar API externa',
    });
  }

  return res.status(500).json({
    statusCode: 500,
    message: 'Internal Server Error',
  });
};
