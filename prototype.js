const football = {
    fullName :"lewa", 
    active(){
        console.log("player is playing");
    }
}

const play = {
    fullName : "cubarsi"
}


const play2 = {
    fullName : "messi"
}

play.__proto__ = football;
play2.__proto__ = football;