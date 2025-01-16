// src/routes/api.routes.ts
import { Router } from 'express';

const apiRouter = Router();
import testRoutes from './test/route';
import jsTestRoutes from './js-test/route';

// Mount user routes under /user
apiRouter.use('/test', testRoutes);
apiRouter.use('/js-test', jsTestRoutes);


export default apiRouter;