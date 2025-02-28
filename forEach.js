let arr=[1,2,3,4,5]

let array =arr.forEach((idx )=>{
    console.log(idx)
})
console.log(array);

let newarr =arr.map((idx )=>{
    return idx**2 
})

console.log(newarr);


let newarray =arr.filter((idx )=>{
    return idx % 2===0; 
})

console.log(newarray);