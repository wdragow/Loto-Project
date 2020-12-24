import { Router } from 'express';

import LotoController from './app/controllers/LotoController';

const routes = new Router();

routes.post('/create', LotoController.createNumbers);

export default routes;