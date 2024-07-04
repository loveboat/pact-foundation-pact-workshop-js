import cors from 'cors';
import express from 'express';
import authMiddleware from './middleware/auth.middleware.js';
import routes from './product/product.routes.js';

const app = express();
const port = 8080;

const init = () => {
  app.use(cors());
  app.use(routes);
  app.use(authMiddleware);

  return app.listen(port, () =>
    console.log(`Provider API listening on port ${port}...`),
  );
};

init();
