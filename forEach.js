let arr=[1,2,3,4,5,6]

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


let ans =arr.reduce((current , result )=>{
    return current + result; 
})

console.log(ans/arr.length);

let greater =arr.reduce((current , result )=>{
    return current < result? current : result ; 
})

console.log(greater);

let idgi=[90,87,45,98,87,99,100,94]
let topper =idgi.filter((idx )=>{
    return idx >=90; 
})

console.log(topper);