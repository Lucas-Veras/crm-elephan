import { Router } from 'express';

import AuthPloomesController from '../controllers/authPloomesController.js';

const authRoutes = Router();

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Conecta com a API do CRM Ploomes
 *     description: Autentica o usuário utilizando a API Key fornecida para acessar o CRM Ploomes.
 *     parameters:
 *       - in: query
 *         name: apiKey
 *         schema:
 *           type: string
 *         required: true
 *         description: A chave de API necessária para autenticação no Ploomes CRM
 *     responses:
 *       200:
 *         description: Conexão realizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Conexão realizada com sucesso"
 *       400:
 *         description: Erro de requisição devido a uma chave de API ausente ou inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Chave de API inválida ou ausente"
 */
authRoutes.post('/auth', AuthPloomesController.connect);

export default authRoutes;
