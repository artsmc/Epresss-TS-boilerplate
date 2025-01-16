// src/routes/quizRoutes.ts
import { Router } from 'express';
import { TestController } from './controllers/test.controller';
import { detailBodyValidation } from './middleware/test.post.validation';

const router = Router();
const testController = new TestController();
// Protected routes
router.get('/', testController.getTest);
router.post('/', detailBodyValidation, testController.getTest);
export default router;