import { Request, Response } from 'express';
import { User } from '@models/User.ts';
import Citi from '../global/Citi.ts';


export default class UserController {

    async createUser(request: Request, response: Response){
        const {firstName, lastName, age } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age);
        
        if(isAnyUndefined) return response.status(400).send();
    
        const httpStatus = await Citi.insertIntoDatabase(User, { firstName, lastName, age });
        return response.status(httpStatus).send()
    }

    async getUsers(request: Request, response: Response){
        const users = await Citi.getAll(User);
        return response.status(201).send(users);
    }

    async deleteUser(request: Request, response: Response){
        const { id } = request.params;
        const userFound = await Citi.findByID(User, id);
        
        if(!userFound) return response.status(400).send();
        const httpStatus = await Citi.deleteValue(User, userFound);

        return response.status(httpStatus).send();
    }

    async updateUser(request: Request, response: Response){
        const { id } = request.params;
        const {firstName, lastName, age } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age);
        if(isAnyUndefined) return response.status(400).send();

        const httpStatus = await Citi.updateValue(User, id, {
            firstName, lastName, age
        });

        return response.status(httpStatus).send();
    }
}