let n =prompt("enter any interger");

let arr=[];

for(let i=0 ; i<n ; i++)
{
     arr[i] = i+1;
}

console.log(arr);

let sum =arr.reduce((current , result )=>{
    return current + result; 
})

console.log(sum);

let mul =arr.reduce((current , result )=>{
    return current * result; 
})

console.log(mul);