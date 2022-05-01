import express from 'express';
import UserController from '@controllers/UserController'

const routes = express.Router();
const userController = new UserController();


routes.post('/user', userController.createUser);
routes.get('/user', userController.getUsers);
routes.delete('/user/:id', userController.deleteUser);
routes.put('/user/:id', userController.updateUser);


export default routes;