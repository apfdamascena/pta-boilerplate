
interface InsertableDatabase {
    httpStatus: number;
    message: string;
}

interface GetableDatabase<Type> {
    values: [] | Type[];
    httpStatus: number;
}

interface RemoveableDatabase {
    httpStatus: number;
    messageFromDelete: String;
}

interface FindalbeDatabaseValue<Type> {
    value: Type | undefined;
    message: string;
}

interface UpdatableDatabaseValue {
    httpStatus: number;
    messageFromUpdate: String;
}

export {
    InsertableDatabase,
    GetableDatabase,
    RemoveableDatabase,
    FindalbeDatabaseValue,
    UpdatableDatabaseValue
};