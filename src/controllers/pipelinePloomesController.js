import { dealParser } from '../parsers/dealParser.js';
import { pipelineParser } from '../parsers/pipelineParser.js';
import PloomesService from '../services/ploomesService.js';

class PipelinePloomesController {
  static getAllPipelines = async (req, res) => {
    try {
      const pipeline = await PloomesService.getAllPipelines();

      if (pipeline.length === 0) {
        res.status(404).json({
          statusCode: 404,
          message: 'Pipelines não encontradas',
        });
      }

      const pipelineFormatted = pipeline.map(pipelineParser);

      res.json(pipelineFormatted);
    } catch (error) {
      next(error);
    }
  };

  static getDealsByPipeline = async (req, res) => {
    try {
      const { statusId } = req.query;
      const { pipelineId } = req.params;

      const deals = await PloomesService.getDealsByPipeline(
        pipelineId,
        statusId
      );

      if (deals.length === 0) {
        res.status(404).json({
          statusCode: 404,
          message: 'Deals não encontrados',
        });
      }

      const dealsFormatted = deals.map(dealParser);

      res.json(dealsFormatted);
    } catch (error) {
      next(error);
    }
  };
}

export default PipelinePloomesController;
