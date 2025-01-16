// src/controllers/quiz.controller.js
const { Request, Response } = require('express');

class TestController {
  // Create test session
  getTest = async (req, res) => {
    res.json({ message: 'Hello World Test Route via Javascript' });
  };
}

module.exports = { TestController };
