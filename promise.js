function getData( getId , getNextData)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data" , getId)
            resolve("success");
           
        },2000)
        
    })
    
}


getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
        getData(3).then((res)=>{
            console.log(res);
            
        })
    })
})

