import express from 'express';
import authRoutes from './authRoutes.js';
import { baseUrl } from '../utils/baseUrl.js';
import contactRoutes from './contactRoutes.js';

const router = express();

router.use(baseUrl, authRoutes);
router.use(baseUrl, contactRoutes);

export { router };
