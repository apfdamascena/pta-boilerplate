import { Request, Response } from 'express';
import { User } from '@models/User';
import Citi from '../global/Citi';


export default class UserController {

    async createUser(request: Request, response: Response){
        const {firstName, lastName, age } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age);
        if(isAnyUndefined) return response.status(400).send();

        const newUser = { firstName, lastName, age };
        const {httpStatus, message} = await Citi.insertIntoDatabase(User, newUser);

        return response.status(httpStatus).send({message});
    }


    async getUsers(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(User);
        return response.status(httpStatus).send(values);
    }

    async deleteUser(request: Request, response: Response){
        const { id } = request.params;
        const {value: userFound, message } = await Citi.findByID(User, id); 
           
        if(!userFound) return response.status(400).send({message});

        const {httpsStatus, message: messageFromDelete } = await Citi.deleteValue(User, userFound);
        return response.status(httpsStatus).send({messageFromDelete});
    }

    async updateUser(request: Request, response: Response){
        const { id } = request.params;
        const {firstName, lastName, age } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = { firstName, lastName, age };

        const { httpsStatus, message } = await Citi.updateValue(User, id, userWithUpdatedValues);
        return response.status(httpsStatus).send({message});
    }
}