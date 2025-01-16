// src/routes/quizRoutes.js
const { Router } = require('express');
const { TestController } = require('./controllers/test.controller');

const router = Router();
const testController = new TestController();
// Protected routes
router.get('/', testController.getTest);
module.exports = router;