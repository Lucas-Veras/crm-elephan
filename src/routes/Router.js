import express from 'express';
import authRoutes from './authRoutes.js';
import { baseUrl } from '../utils/baseUrl.js';

const router = express();

router.use(baseUrl, authRoutes);

export { router };
