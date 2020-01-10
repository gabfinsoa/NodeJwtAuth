import { Router } from 'express';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';
import AuthController from './app/controllers/AuthController';

const routes = Router();

routes.get('/', (req, res) => res.json('JWT-NODE'));

routes.post('/users', UserController.store);
routes.post('/login', AuthController.store);

// Todas as rotas ABAIXO do .use, devem utilizar o TOKEN (bear authentication)
routes.use(authMiddleware);

routes.get('/test', (req, res) => res.json('Authenticaded'));

export default routes;
