import express from 'express';
import authRoutes from './authRoutes.js';
import { baseUrl } from '../utils/baseUrl.js';
import contactRoutes from './contactRoutes.js';
import pipelineRoutes from './pipelineRoutes.js';

const router = express();

router.use(baseUrl, authRoutes);
router.use(baseUrl, contactRoutes);
router.use(baseUrl, pipelineRoutes);

export { router };
