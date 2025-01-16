
# Routes Folder

  

This folder contains all the route definitions and related files for the API. Routes in this project are modularized for scalability and organized into individual feature-based folders.

  

## How to Add and Write Routes

  

Follow the steps below to add a new route to the API:

  

---

  

### 1. Create a Folder for Your Route

Each feature should have its own folder within the `routes` directory. The folder should contain:

- A **controller** to define route logic.

- Any **middleware** for validations or pre-route logic.

-  **Route definition** to tie controllers and middleware to HTTP endpoints.

  

Example folder structure for a feature called `example`:

src/routes/example/ ├── controllers/ │ └── example.controller.ts ├── middleware/ │ └── example.middleware.ts ├── route.ts

  

`

---

  

### 2. Write a Controller

The controller defines the logic for the routes. For example:

```typescript

// src/routes/example/controllers/example.controller.ts

import { Request, Response } from  'express';

  

export  class  ExampleController {

public  getExample  =  async (req:  Request, res:  Response) => {

res.json({ message:  'Example GET route working!' });

};

  

public  createExample  =  async (req:  Request, res:  Response) => {

const { name } = req.body;

res.json({ message:  `Example created for ${name}` });

};

}
```
### 3. Add Middleware (Optional)

Middleware is used for validation, authentication, or pre-route processing.

Example middleware for validation:
```
// src/routes/example/middleware/example.middleware.ts
import { NextFunction, Response, Request } from 'express';
import Joi from 'joi';

const exampleValidationSchema = Joi.object({
  name: Joi.string().required(),
});

export const exampleValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await exampleValidationSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Validation error', error: error.message });
  }
};
```
Here’s the complete README in one markdown file:

markdown

CopyEdit

``# Routes Folder

This folder contains all the route definitions and related files for the API. Routes in this project are modularized for scalability and organized into individual feature-based folders.

## How to Add and Write Routes

Follow the steps below to add a new route to the API:

---

### 1. Create a Folder for Your Route
Each feature should have its own folder within the `routes` directory. The folder should contain:
- A **controller** to define route logic.
- Any **middleware** for validations or pre-route logic.
- **Route definition** to tie controllers and middleware to HTTP endpoints.

Example folder structure for a feature called `example`:`` 

src/routes/example/ ├── controllers/ │ └── example.controller.ts ├── middleware/ │ └── example.middleware.ts ├── route.ts

yaml

CopyEdit

 ``--- 
### 2. Write a Controller
The controller defines the logic for the routes. For example:
```typescript
// src/routes/example/controllers/example.controller.ts
import { Request, Response } from 'express';

export class ExampleController {
  public getExample = async (req: Request, res: Response) => {
    res.json({ message: 'Example GET route working!' });
  };

  public createExample = async (req: Request, res: Response) => {
    const { name } = req.body;
    res.json({ message: `Example created for ${name}` });
  };
}`` 

----------

### 3. Add Middleware (Optional)

Middleware is used for validation, authentication, or pre-route processing.

Example middleware for validation:

typescript

CopyEdit

`// src/routes/example/middleware/example.middleware.ts
import { NextFunction, Response, Request } from 'express';
import Joi from 'joi';

const exampleValidationSchema = Joi.object({
  name: Joi.string().required(),
});

export const exampleValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await exampleValidationSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Validation error', error: error.message });
  }
};` 
```
----------

### 4. Define the Routes

Link the controllers and middleware to HTTP endpoints using `Router`:

```
// src/routes/example/route.ts
import { Router } from 'express';
import { ExampleController } from './controllers/example.controller';
import { exampleValidation } from './middleware/example.middleware';

const router = Router();
const exampleController = new ExampleController();

router.get('/', exampleController.getExample);
router.post('/', exampleValidation, exampleController.createExample);

export default router;

```

### 5. Register the Route in the Global Router

Add the new route to `api.routes.ts` so it is included in the API.

Example:
```
// src/routes/api.routes.ts
import { Router } from 'express';
import testRoutes from './test/route';
import jsTestRoutes from './js-test/route';
import exampleRoutes from './example/route';

const apiRouter = Router();

apiRouter.use('/test', testRoutes);
apiRouter.use('/js-test', jsTestRoutes);
apiRouter.use('/example', exampleRoutes);

export default apiRouter;
```

### 6. Test Your Route

1.  Start the server:

    npm run dev
## Best Practices for Adding Routes

-   Organize feature-specific routes, controllers, and middleware in their own folders.
-   Use **middleware** to handle validations, authentication, or pre-route logic.
-   Keep the **controller** focused on processing the request and returning a response.
-   Use descriptive and RESTful endpoint names.
