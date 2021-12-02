/*
13.Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
numbers in a separate array. Arrange them such as from the beginning are the odds and from the
ending the evens.
*/

function filterNumber(a){
    let arr = []
    let number = 1;
    let type = typeof number
   let numbers = a.filter(item => typeof item ===type)
    arr.push(numbers)
    return arr
}
console.log(filterNumber([15,null,undefined,true,false,"hey"]))
