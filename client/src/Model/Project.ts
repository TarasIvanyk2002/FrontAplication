import IIdentity from "./IIdentity";

export default class Project implements IIdentity<number>{
    id: number;
    name: string;
    des: string;

    constructor(id:number, name:string, des:string){
        this.id = id;
        this.name = name;
        this.des = des;
    }
}