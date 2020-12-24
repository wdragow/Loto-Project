import { Router } from 'express';

import LotoController from './app/controllers/LotoController';

const routes = new Router();

routes.get('/loto', LotoController.listar);

export default routes;