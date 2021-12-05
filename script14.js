//15. Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
//of their lengths.


function sumOfMaxMin(ar) {
    let max = ar.reduce((a, b) => a.length > b.length ? a : b)
   let min = ar.reduce((a,b)=>a.length <= b.length ? a :b)
   let sum = min.length + max.length;
   return sum
  
   
}


console.log(sumOfMaxMin(["anymore",'raven','me','communicate']))




  
  
