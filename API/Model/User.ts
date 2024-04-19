export class User{
    login;
    password;
    constructor(login: string, password: string){
        this.login = login;
        this.password = password;
    }

    getJSON(): UserJSON{
        return {login: this.login, password: this.password}
    }


}

export type UserJSON = {login: string, password: string};