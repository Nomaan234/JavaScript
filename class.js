class player{

    constructor(position){
        console.log("best player")
        this.position = position
    }
    goal(){
        console.log("he can score")
    }

    assist(){
        console.log("he can assist")
    }
    position(place){
        this.Position = place;
    }
}

let lewa = new player("striker");

let cubarsi = new player("defender");
