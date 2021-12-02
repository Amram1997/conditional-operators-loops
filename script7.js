// . Enter a number. Reverse its first and last digits. Print the new number.

function reverseALL(x){
    let stringRverse = x + "";
    let str = stringRverse.split("").reverse().join("");
    return str
}

console.log(reverseALL(123456))