import { Router } from 'express';

import AuthPloomesController from '../controllers/authPloomesController.js';

const authRoutes = Router();

authRoutes.post('/auth', AuthPloomesController.connect);

export default authRoutes;
