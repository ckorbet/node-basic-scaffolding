import { Router } from 'express';
import { GenerateController } from '../controllers';

const router = Router();

router.route('/')
  .post(GenerateController.generateProject);

export default router;
