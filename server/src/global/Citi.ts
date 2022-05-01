import { getRepository } from 'typeorm';

export default class Citi {

    public static areValuesUndefined(...elements: string[]): boolean {
        const isAnyUndefined  =  elements.some((element) => {
            return element === undefined;
        })
        return isAnyUndefined;
    }

    static async insertIntoDatabase<Type>(repositoryType: Type, object: any): number {
        try {
            const repository = getRepository(repositoryType);
            await repository.save(object);
            return 201; 
        } catch(error){
            return 400;
        }
    }

    static async getAll<Type>(repositoryType: Type): Type[] | [] {
        try {
            const repository = getRepository(repositoryType);
            const values = await repository.find();
            return values;
        } catch(error){
            return [];
        }
    }

    static async findByID<Type>(repositoryType: Type, id: string): Type | undefined {
        try {
            const entityID = Number(id);
            const repository = getRepository(repositoryType);
            const value = await repository.find({
                where: { id: entityID }
            }); 
            const wasFound = value ? value[0] : undefined;
            return wasFound;
        } catch(error){
            return undefined;
        }
    }

    static async deleteValue<Type>(repositoryType: Type, object: T): number {
        try {
            const repository = getRepository(repositoryType);
            await repository.remove(object);
            return 200;
        } catch(error){
            return 400;
        }
    }

    static async updateValue<Type>(repositoryType: Type, id: string, object: T): number {
        try {
            const entityID = Number(id);
            const repository = getRepository(repositoryType)
            const modified = repository.update({id: entityID}, object);
            console.log(modified);
            return 200;
        } catch(error){
            return 400;
        }
    }
}