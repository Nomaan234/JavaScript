const URL = "https://api.chucknorris.io/jokes/random";
const facts = document.querySelector(".facts");
const btn = document.querySelector(".btn");

let getFacts = async () => {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.value);
    facts.innerText = data.value;
    
};


btn.addEventListener("click" , getFacts)
