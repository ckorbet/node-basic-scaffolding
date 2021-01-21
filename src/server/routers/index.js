import { Router } from 'express';

const router = Router();

router.use('/generate', require('./generate').default);

export default router;
