import Project from "../Model/Project";
import ISerivceCRUD from "./IService";

export class ProjectSevice implements ISerivceCRUD<Project>{
    key: string;
    listOfProjects: Project[];    

    constructor(key:string){
        this.key = key;
        this.listOfProjects = [];

        this.init();
    }


    init(){
        if(localStorage.getItem(this.key) === null){
            localStorage.setItem(this.key, JSON.stringify(this.listOfProjects))
        }else{
            this.read();
        }
    }

    create(project:Project) {
        this.listOfProjects.push(project);
        localStorage.setItem(this.key, JSON.stringify(this.listOfProjects));
    }

    read() {
        if(localStorage.getItem(this.key)){
            const listOfItems = JSON.parse(localStorage.getItem(this.key) as string);
            
            this.listOfProjects = [];
            listOfItems.forEach((project: Project) => {
                this.listOfProjects.push(new Project(project.id, project.name, project.des));
            });
        }

        return this.listOfProjects;
    }

    update(project: Project) {
        const findProject = this.listOfProjects.findIndex( e => e.id === project.id);
        if(findProject > 0){
            this.listOfProjects[findProject] = project; 
            return true;
        }
        return false;
    }


    delete(id: number) {
        const findProject = this.listOfProjects.findIndex( e => e.id === id);
        if(findProject > 0){
            this.listOfProjects = this.listOfProjects.filter( (e:Project) => e.id !== id );
            return true;
        }
        return false;
    }
    

}
