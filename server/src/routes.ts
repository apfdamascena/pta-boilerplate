import express from 'express';
import UserController from '@controllers/UserController'

const routes = express.Router();
const userController = new UserController();


routes.post('/user', userController.createUser)
routes.get('/user', userController.getUser)


export default routes;