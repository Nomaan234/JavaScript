let btn1 = document.querySelector(".btn1")

// btn1.onclick = () =>
// {
//     console.log('button was clicked')
// }

// let btn2 = document.querySelector(".btn2")

// btn2.ondblclick = () =>
// {
//     console.log('button was clicked twice')
// }

// let div = document.querySelector(".box1")

// // div.onmouseover = () =>
// {
//     console.log('inside the circle')
// }

// div.onmouseover=(e)=>
// {
// console.log(e)
// console.log(e.type)
// console.log(e.target)
// console.log(e.clientX)
// console.log(e.clientY)
//}

const ben = ()=>
    {
        console.log("inside the circle")
    }

btn1.addEventListener("click", ben)
btn1.addEventListener("click",()=>
    {
        console.log("inside the circle 2")
    } )
    btn1.addEventListener("click",()=>
        {
            console.log("inside the circle 3")
        } )

btn1.removeEventListener("click",ben)