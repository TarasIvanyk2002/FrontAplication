import IIdentity from "../Model/IIdentity";


export default interface ISerivceCRUD<T>{
    key: string;
    listOfProjects: T[]; 

    init(): void;

    create(item:T): void;

    read(): T[];

    update(item:T): boolean;

    delete(id: number): boolean;

}
