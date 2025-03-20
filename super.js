class person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name ;
    }
    eat(){
        console.log("he can eat");
    }

}

class engineer extends person{
    constructor(name){
        super(name);
        
    }
    work(){
        console.log("solve problems")
    }
}


let pers = new person;
let engi = new engineer("NOMAAN");
