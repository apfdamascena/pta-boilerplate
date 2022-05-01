import { Request, Response } from 'express';
import { User } from '@models/User.ts';
import Citi from '../global/Citi.ts';


export default class UserController {

    async createUser(request: Request, response: Response){
        const {firstName, lastName, age } = request.body;

        const isAnyUndefined = Citi.areBodyValuesUndefined(firstName, lastName, age);
        
        if(isAnyUndefined){
            return response.status(400).send();
        }
        
        const httpStatus = await Citi.insertIntoDatabase(User, { firstName, lastName, age });
        return response.status(httpStatus).send()
    }

    async getUser(request: Request, response: Response){
        return response.status(201).send({
            oi: "opa"
        })
    }
}