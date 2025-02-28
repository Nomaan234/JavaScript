let marks= [10,20,30,40,50]


for( let val in marks)
{
   let  offer = marks[val]/10 ;
    marks[val] = marks[val] - offer ;
    console.log(marks[val]);
}

