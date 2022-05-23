import { DeepPartial, EntityTarget } from 'typeorm';
import { connection } from 'src/database/connection';
import Message from "./Message";
import Terminal from './Terminal';
import {
    InsertableDatabase,
    GetableDatabase,
    RemoveableDatabase,
    UpdatableDatabaseValue,
    FindalbeDatabaseValue
} from './interfaces'

export default class Citi {

    public static areValuesUndefined(...elements: string[]): boolean {
        const isAnyUndefined  =  elements.some((element) => {
            return element === undefined;
        })
        return isAnyUndefined;
    }

    static async insertIntoDatabase<Type>(entity: EntityTarget<Type>, object: DeepPartial<Type>): Promise<InsertableDatabase> {
        try {
            const entityRepository = connection.getRepository(entity);
            await entityRepository.save(object);
            Terminal.show(Message.INSERTED_IN_DATABASE);
            return {
                httpStatus: 201,
                message: Message.INSERTED_IN_DATABASE
            }; 
        } catch(error){
            Terminal.show(Message.ERROR_INSERTING_DATABASE);
            return {
                httpStatus: 400,
                message: Message.ERROR_INSERTING_DATABASE
            };
        }
    }

    static async getAll<Type>(entity: EntityTarget<Type>): Promise<GetableDatabase<Type>> {
        try {
            const entityRepository = connection.getRepository(entity);
            const repositoryValues = await entityRepository.find();
            Terminal.show(Message.GET_ALL_VALUES_FROM_DATABASE);
            return {
                values: repositoryValues,
                httpStatus: 200
            };
        } catch(error){
            Terminal.show(Message.ERROR_GETTING_VALUES_FROM_DATABASE);
            return {
                values: [],
                httpStatus: 400
            };
        }
    }

    static async findByID<Type>(entity: EntityTarget<Type>, id: string): Promise<FindalbeDatabaseValue<Type>> {
        try {
            const entityID = Number(id);
            const entityRepository = connection.getRepository(entity);
            const valueFound = await entityRepository.find({
                where: {
                    id: entityID
                }
            })

            if(valueFound.length === 0) throw new Error('Nao foi encontrado')
            
            Terminal.show(Message.VALUE_WAS_FOUND);
            return {
                value: valueFound[0],
                message: Message.VALUE_WAS_FOUND
            }; 
        } catch(error){
            Terminal.show(Message.VALUE_WAS_NOT_FOUND);
            return {
                value: undefined,
                message: Message.VALUE_WAS_NOT_FOUND
            };
        }
    }

    static async deleteValue<Type>(entity: EntityTarget<Type>, object: Type): Promise<RemoveableDatabase>  {
        try {
            const entityRepository = connection.getRepository(entity);
            await entityRepository.remove(object);
            Terminal.show(Message.VALUE_DELETED_FROM_DATABASE);
            return {
                httpStatus: 200,
                messageFromDelete: Message.VALUE_DELETED_FROM_DATABASE
            };
        } catch(error){
            Terminal.show(Message.ERROR_AT_DELETE_FROM_DATABASE);
            return {
                httpStatus: 400,
                messageFromDelete: Message.ERROR_AT_DELETE_FROM_DATABASE
            }
        }
    }

    static async updateValue<Type>(repositoryType: EntityTarget<Type>, id: string, object: Type): Promise<UpdatableDatabaseValue> {
        try {
            const entityID = Number(id);
            const entityRepository = connection.getRepository(repositoryType);

            const valueFound = await entityRepository.find({
                where: {
                    id: entityID
                }
            })

            if(valueFound.length === 0) throw new Error("Não foi encontrado");

            await entityRepository.update(id, object);
            Terminal.show(Message.VALUE_WAS_UPDATED);
            return {
                httpStatus: 200,
                messageFromUpdate: Message.VALUE_WAS_UPDATED
            };
        } catch(error){
            Terminal.show(Message.ERROR_AT_UPDATE_FROM_DATABASE);
            return {
                httpStatus: 400,
                messageFromUpdate: Message.ERROR_AT_UPDATE_FROM_DATABASE
            };
        }
    }
}