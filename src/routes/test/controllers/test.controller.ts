// src/controllers/quiz.controller.ts
import { Request, Response } from 'express';


export class TestController {
  // Create test session
  public getTest = async (req: Request, res: Response) => {
    res.json({ message: 'Hello World Test Route'});
  };
}
