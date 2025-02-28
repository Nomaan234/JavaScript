function print(msg)
{
    console.log("nomaan");
    console.log("best");
    console.log(msg);
}

const sum =(a,b)=>{ 
    return a+b;
}

const mul =(a,b)=>{ 
    return a*b;
}

function vowels(msg)
{
    let count=0;
    for( let val of msg)
    {
        if (val=="a" || val=="e" || val=="i" || val=="o" || val=="u")
            count++;
    }

    return count;
}

//arrow function

const vowel =(msg)=>
{
    let count=0;
    for( let val of msg)
    {
        if (val=="a" || val=="e" || val=="i" || val=="o" || val=="u")
            count++;
    }

    return count;
}