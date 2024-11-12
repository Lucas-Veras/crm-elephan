import { Router } from 'express';
import { ContacPloomesControler } from '../controllers/contactPloomesController.js';

const contactRoutes = Router();

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Lista contatos do CRM Ploomes
 *     description: Retorna uma lista de contatos do CRM Ploomes. Se o parâmetro `email` for fornecido, a rota retorna o contato com o email correspondente, se encontrado. Caso contrário, retorna todos os contatos disponíveis.
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Email do contato a ser buscado. Caso fornecido, retornará o contato associado a esse email.
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
 *                     description: ID único do contato no CRM
 *                     example: 123
 *                   name:
 *                     type: string
 *                     description: Nome completo do contato
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     description: Endereço de e-mail do contato
 *                     example: "johndoe@example.com"
 *                   cpf:
 *                     type: string
 *                     description: CPF do contato
 *                     example: "123.456.789-00"
 *                   cnpj:
 *                     type: string
 *                     description: CNPJ da empresa associada ao contato, se aplicável
 *                     example: "12.345.678/0001-99"
 *                   birthday:
 *                     type: string
 *                     format: date
 *                     description: Data de nascimento do contato
 *                     example: "1990-01-01"
 *                   avatarUrl:
 *                     type: string
 *                     description: URL da foto de avatar do contato
 *                     example: "https://example.com/avatar.jpg"
 *                   createAt:
 *                     type: string
 *                     format: date-time
 *                     description: Data e hora de criação do contato no sistema
 *                     example: "2024-01-01T12:00:00Z"
 *                   updateAt:
 *                     type: string
 *                     format: date-time
 *                     description: Data e hora da última atualização do contato
 *                     example: "2024-02-01T12:00:00Z"
 *                   Company:
 *                     type: object
 *                     description: Informações da empresa associada ao contato, caso exista
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID da empresa
 *                         example: 456
 *                       name:
 *                         type: string
 *                         description: Nome da empresa
 *                         example: "Empresa Teste"
 *                       cnpj:
 *                         type: string
 *                         description: CNPJ da empresa
 *                         example: "12.345.678/0001-99"
 *                       createAt:
 *                         type: string
 *                         format: date-time
 *                         description: Data de criação da empresa no sistema
 *                         example: "2024-01-01T12:00:00Z"
 *                       updateAt:
 *                         type: string
 *                         format: date-time
 *                         description: Data da última atualização da empresa no sistema
 *                         example: "2024-02-01T12:00:00Z"
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
 *       400:
 *         description: Parâmetros inválidos ou faltando informações necessárias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Parâmetros inválidos"
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
