/*
11.Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
sum, print the quotient, otherwise print the remainder.
*/ 

function insertNumber(a){
    let str = a.toString().split("");
    let sum = 0;
    let prod = 1;
    for(let i = 0; i < str.length;i++){
        sum += Number(str[i])
      
    }  
    for(let i = 0; i < str.length;i++){
        prod *= Number(str[i])
    }
    let prodsum = prod/sum
    if(prodsum){
        return `quotient is ${prodsum}`
    }else{
        return 'no calculate'
    }

}

console.log(insertNumber(0))