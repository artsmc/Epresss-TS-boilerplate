# Express + TypeScript API Starter

A robust and scalable starter template for building Node.js APIs with **Express** and **TypeScript**. This setup supports both TypeScript and JavaScript files, enabling rapid development and easy deployment to platforms like **Vercel**, **AWS Lambda**, **Render**, or any Node.js hosting service.

## Features
- 🛠️ **TypeScript and JavaScript Support**: Mix `.ts` and `.js` files seamlessly in your codebase.
- 🔥 **Hot Reloading**: Powered by `ts-node-dev` for fast iteration during development, with live reloading for both `.ts` and `.js` files.
- 🚀 **Optimized for Deployment**: Easily deploy to Vercel, AWS Lambda, Render, or other platforms with minimal configuration.
- 📂 **Clean File Structure**: Organized `src` directory with routes, middlewares, and more for easy scalability.
- 🏗️ **TypeScript Configuration**: Pre-configured `tsconfig.json` for strict type-checking and fast builds.
- 💡 **Express Integration**: Quickly create RESTful APIs with Express.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy the `dist/` folder to your preferred platform.

## File Structure
```
express-typescript-api/
├── src/
│   ├── index.ts           # Main server entry point
│   ├── routes/
│       ├── exampleRoute.ts  # Example TypeScript route
│       ├── exampleRoute.js  # Example JavaScript route
├── dist/                  # Compiled output
├── package.json           # Node.js configuration
├── tsconfig.json          # TypeScript configuration
```

## Development Scripts
- `npm run dev`: Start the development server with hot reloading.
- `npm run build`: Compile TypeScript into JavaScript.
- `npm start`: Start the compiled application.

## Deployment

### Vercel
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel
   ```

### AWS Lambda
1. Install the AWS Lambda adapter:
   ```bash
   npm install aws-serverless-express
   ```
2. Add a Lambda handler in `src/lambda.ts`:
   ```typescript
   import { Handler } from 'aws-lambda';
   import serverlessExpress from 'aws-serverless-express';
   import app from './index';

   const server = serverlessExpress.createServer(app);

   export const handler: Handler = (event, context) => {
       return serverlessExpress.proxy(server, event, context);
   };
   ```
3. Deploy using the AWS CLI or tools like Serverless Framework.

## License
This project is licensed under the MIT License. Feel free to use it as you see fit.

---

Happy coding! 🎉

