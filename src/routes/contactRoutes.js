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
 *                   birthday:
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

/**
 * @swagger
 * /contacts/{id}/deals:
 *   get:
 *     summary: Retorna os negócios de um contato
 *     description: Retorna os negócios (deals) associados a um contato
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O ID do contato para o qual deseja obter os negócios.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna os negócios do contato
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: O ID do negócio.
 *                     example: "12345"
 *                   title:
 *                     type: string
 *                     description: O título do negócio.
 *                     example: "Negócio de Vendas"
 *                   amount:
 *                     type: number
 *                     format: float
 *                     description: O valor do negócio.
 *                     example: 5000.00
 *                   status:
 *                     type: string
 *                     description: O status do negócio.
 *                     example: "Em andamento"
 *                   startDate:
 *                     type: string
 *                     format: date
 *                     description: A data de início do negócio.
 *                     example: "2024-11-10"
 */
contactRoutes.get(
  '/contacts/:id/deals',
  ContacPloomesControler.getDealsByContactId
);

export default contactRoutes;
