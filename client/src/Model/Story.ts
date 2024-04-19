import IIdentity from "./IIdentity";
import Project from "./Project";

export class Story implements IIdentity<UserId>{
    id: UserId;
    name: string;
    des: string;
    priority: Priority;
    project: Project;
    creationDate: Date;
    state: State;
    owner: UserId;


    constructor(
            id:UserId,
            name: string,
            des: string,
            priority: Priority,
            project: Project,
            creationDate: Date,
            state: State,
            owner: UserId
        ){

        this.id = id;
        this.name = name;
        this.des = des;
        this.priority = priority;
        this.project = project;
        this.creationDate = creationDate;
        this.state = state;
        this.owner = owner;

    }

}



export type UserId = string;

export enum Priority{
    Low = "niski",
    Medium = "średni",
    High = "wysoki"
}

export enum State{
    ToDo,
    Doing,
    Done
}




