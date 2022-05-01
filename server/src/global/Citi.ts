import { getRepository } from 'typeorm';

export default class Citi {

    public static areBodyValuesUndefined(...elements: string[]): boolean {
        const isAnyUndefined  =  elements.some((element) => {
            return element === undefined;
        })
        return isAnyUndefined;
    }

    public static insertIntoDatabase<Type>(repositoryType: Type, object: any): number {
        try {
            const repository = getRepository(repositoryType);
            repository.save(object);
            return 201; 
        } catch(error){
            return 400;
        }
    }
}