import { Router } from 'express';
import { ContacPloomesControler } from '../controllers/contactPloomesController.js';

const contactRoutes = Router();

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Lista contatos do CRM Ploomes
 *     description: Retorna uma lista de contatos do CRM Ploomes. Caso o parâmetro `email` seja fornecido, a rota retorna o contato com o email correspondente, se encontrado.
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Email do contato a ser buscado
 *     responses:
 *       200:
 *         description: Lista de contatos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 123
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     example: "johndoe@example.com"
 *                   cpf:
 *                     type: string
 *                     example: "123.456.789-00"
 *                   dataNascimento:
 *                     type: string
 *                     format: date
 *                     example: "1990-01-01"
 *                   avatarUrl:
 *                     type: string
 *                     example: "https://example.com/avatar.jpg"
 *                   createAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-01-01T12:00:00Z"
 *                   updateAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-02-01T12:00:00Z"
 *       404:
 *         description: Contato não encontrado ou parâmetros inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Contato não encontrado"
 */
contactRoutes.get('/contacts', ContacPloomesControler.getContacts);

export default contactRoutes;
