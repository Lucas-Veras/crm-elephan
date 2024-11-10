import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  CRM_API_URL: process.env.CRM_API_URL,
  CRM_API_KEY: process.env.CRM_API_KEY,
  CACHE_EXPIRATION: process.env.CACHE_EXPIRATION || 300, // 5s
};

export default config;
