function getData( getId )
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data" , getId)
            resolve("success");
           
        },2000)
        
    })
    
}

(async function ()
    
 {
    await  getData(3);
  await  getData(4);
  await  getData(5);
})()