import { Router } from "express";

import  register from './register';
import  login from './login';
import  profile from './profile';

const routes = Router();

routes.use(register);
routes.use(login);
routes.use(profile);

const rootRouter = Router();

export default  rootRouter.use('/', routes);

