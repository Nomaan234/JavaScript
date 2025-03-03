let button = document.querySelector(".btn1");
let body = document.querySelector("body");
let currmode = "light";

button.addEventListener("click" , () => {
    if(currmode === "light")
    {
        currmode = "dark";
        body.classList.add("dark") ;
        body.classList.remove("white");

    }
    else{
        currmode ="light";
        body.classList.add("white") ;
        body.classList.remove("dark");
       }
    console.log(currmode);
});

