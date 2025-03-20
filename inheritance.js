class person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("he can eat");
    }

    sleep(){
        console.log("he can sleep");
    }
    work(){
        console.log("do easy work")
    }
}

class engineer extends person{
    work(){
        console.log("solve problems")
    }
}

class doctor extends person{
    work(){
        console.log("treat ill people")
    }
}

let pers = new person;
let engi = new engineer;
let doc = new doctor;