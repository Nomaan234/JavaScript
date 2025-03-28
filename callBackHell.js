function getData( getId , getNextData)
{
    setTimeout(() => {
        console.log("data" , getId)
        if( getNextData)
        {
            getNextData();
        }
    },2000)
}

getData(1 , ()=>{
    getData(2 , ()=>{
        getData(3)
    })
});