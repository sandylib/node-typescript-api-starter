import { Router } from "express";

import  register from './register';
import  login from './login';
import  home from './home';

const routes = Router();

routes.use(register);
routes.use(login);
routes.use(home);

const rootRouter = Router();

export default  rootRouter.use('/', routes);

