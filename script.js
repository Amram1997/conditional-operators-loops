/*
1. Given a number. Print “odd” if the number is odd and “even” if itʼs even.
Input Output
125 “odd”
35 “odd”
20 “even”

*/

 
function sortEvenOdd(a) {
    if(a % 2 !== 0){
        console.log("odd")
    }else{
        console.log("even")
    }
}
sortEvenOdd(11)