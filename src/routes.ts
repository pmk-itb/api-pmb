import { Router } from 'express';

function routes(app: Router) {
  app.get('/', (_req, res) => {
    res.send('Hello world');
  });

  return app;
}
export = routes;
