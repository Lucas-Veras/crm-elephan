import { Router } from 'express';
import PipelinePloomesController from '../controllers/pipelinePloomesController.js';

const pipelineRoutes = Router();

/**
 * @swagger
 * /pipelines:
 *   get:
 *     summary: Retorna a lista de pipelines
 *     description: Recupera todas as pipelines do CRM Ploomes. A resposta inclui um array de pipelines, com informações como o ID e o nome de cada pipeline.
 *     responses:
 *       200:
 *         description: Lista de pipelines retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID único da pipeline
 *                     example: 12345
 *                   name:
 *                     type: string
 *                     description: Nome da pipeline
 *                     example: "Pipeline de Vendas"
 *       500:
 *         description: Erro interno ao recuperar pipelines
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Erro ao tentar recuperar pipelines"
 */
pipelineRoutes.get('/pipelines', PipelinePloomesController.getAllPipelines);

/**
 * @swagger
 * /pipelines/{pipelineId}/deals:
 *   get:
 *     summary: Retorna os deals de uma pipeline específica
 *     description: Recupera todos os deals associados a uma pipeline específica. Pode ser filtrado pelo status dos deals se fornecido como parâmetro de consulta.
 *     parameters:
 *       - in: path
 *         name: pipelineId
 *         required: true
 *         description: ID da pipeline para a qual os deals serão recuperados
 *         schema:
 *           type: integer
 *           example: 12345
 *       - in: query
 *         name: statusId
 *         required: false
 *         description: ID do status para filtrar os deals. Se não fornecido, todos os deals serão retornados.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Lista de deals recuperada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID único do deal
 *                     example: 67890
 *                   title:
 *                     type: string
 *                     description: Título do deal
 *                     example: "Novo contrato com cliente"
 *                   amount:
 *                     type: number
 *                     description: Valor do deal
 *                     example: 5000.00
 *                   status:
 *                     type: string
 *                     description: Status do deal (por exemplo, 'Em Progresso', 'Fechado', etc.)
 *                     example: "Em Progresso"
 *                   startDate:
 *                     type: string
 *                     format: date
 *                     description: Data de início do deal
 *                     example: "2024-11-11"
 *       400:
 *         description: Parâmetros inválidos ou falta de dados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Parâmetros inválidos"
 *       404:
 *         description: Pipeline não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Pipeline não encontrada"
 *       500:
 *         description: Erro interno ao tentar recuperar os deals
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Erro ao tentar recuperar os deals"
 */
pipelineRoutes.get(
  '/pipelines/:pipelineId/deals',
  PipelinePloomesController.getDealsByPipeline
);

export default pipelineRoutes;
