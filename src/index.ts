// src/index.ts
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express from 'express';
import apiRouter from './routes/api.routes';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use((req, res, next) => {
  const allowedOrigins = [process.env.CLIENT];
  // const origin = req.headers.origin;
  // console.log({ ORIGIN: origin })
  // if (allowedOrigins.includes(origin as string)) {
  //   res.setHeader('Access-Control-Allow-Origin', origin as string);
  // }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers",
    "Content-Type, Accept, X-Requested-With, Session, authorization, x-api-key, FlowSid, ExecutionSid, Cookie"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
const CORS_OPTIONS = {
  credentials: true,
  origin: [process.env.CLIENT].filter(Boolean) as string[],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  // preflightContinue: true,
  optionsSuccessStatus: 204
}
// Use CORS middleware

app.use(
  cors(CORS_OPTIONS)
);

// Middleware to log request time and duration
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`
    Request received at: ${new Date(start).toISOString()}
    Method: ${req.method}
    Path: ${req.path}`);

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Request processed in: ${duration}ms`);
  });

  next();
});

// Use the global API router
app.use('/api', apiRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World! This is a TypeScript API with adjusted global router.');
});

// Catch-all route for undefined routes
app.use('*', (req, res) => {
  res.status(404).send('Hello World');
});

// Start the server
let server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown for hot reloading
process.once('SIGUSR2', () => {
  server.close(() => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0);
  });
});