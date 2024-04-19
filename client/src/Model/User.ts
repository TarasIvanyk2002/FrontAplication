import IIdentity  from "./IIdentity";

export default class User implements IIdentity<number>{
    id: number;
    name: string;
    surname: string;

    constructor(id:number, name:string, surname:string){
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

}


export const userMock = new User(1, "Adam","Man");