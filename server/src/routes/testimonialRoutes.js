import express from 'express';
import { setEntity } from "../middleware/testimonialMiddleware.js";
import { getRessources } from '../middleware/ressourceMiddleware.js';

const router = express.Router();

router.use(setEntity);

router.get('/', getRessources);

export default router;
