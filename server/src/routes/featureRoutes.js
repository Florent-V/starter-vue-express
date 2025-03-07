import express from 'express';
import { setEntity } from "../middleware/featureMiddleware.js";
import { getRessources } from '../middleware/ressourceMiddleware.js';

const router = express.Router();

router.use(setEntity);

router.get('/', getRessources);

export default router;
