import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT || 8000,
  PLOOMES_URL: process.env.PLOOMES_URL,
};

export default config;
