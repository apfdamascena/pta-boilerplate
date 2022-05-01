import { Request, Response } from 'express';
import { User } from '@models/User';
import Citi from '../global/Citi';


export default class UserController {

    async createUser(request: Request, response: Response){
        const {firstName, lastName, age } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age);
        
        if(isAnyUndefined) return response.status(400).send();
    
        const httpStatus = Citi.insertIntoDatabase(User, { firstName, lastName, age });
        return response.status(httpStatus).send()
    }

    async getUsers(request: Request, response: Response){
        const users = Citi.getAll(User);
        return response.status(200).send(users);
    }

    async deleteUser(request: Request, response: Response){
        const { id } = request.params;
        const userFound = Citi.findByID(User, id);
        
        if(!userFound) return response.status(400).send();
        const httpStatus = Citi.deleteValue(User, userFound);

        return response.status(httpStatus).send();
    }

    async updateUser(request: Request, response: Response){
        const { id } = request.params;
        const {firstName, lastName, age } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age);
        if(isAnyUndefined) return response.status(400).send();

        const httpStatus = Citi.updateValue(User, id, {
            firstName, lastName, age
        });

        return response.status(httpStatus).send();
    }
}