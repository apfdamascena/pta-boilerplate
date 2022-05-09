
interface InsertableDatabase {
    httpStatus: number;
    message: string;
}

interface GetableDatabase<Type> {
    values: [] | Type[];
    httpStatus: number;
}

interface RemoveableDatabase {
    httpsStatus: number;
    message: String;
}

interface FindalbeDatabaseValue<Type> {
    value: Type | undefined;
    message: string;
}

interface UpdatableDatabaseValue {
    httpsStatus: number;
    message: String;
}

export {
    InsertableDatabase,
    GetableDatabase,
    RemoveableDatabase,
    FindalbeDatabaseValue,
    UpdatableDatabaseValue
};