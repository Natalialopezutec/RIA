export class User {
    id?: String;
    name: String;
    
    constructor(name:String, public surname:String) {
        this.name = name;
    };
}