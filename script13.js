// 14. Given an array of strings and numbers. Print the number of integers and the number of strings in the
//array.



function numString(n){
    let countNum = 0;
    let countString = 0;
    for(let i = 0; i < n.length; i++){
        if(typeof(n[i]) === 'number'){
           countNum ++
        } else if(typeof(n[i]) === 'string'){
            countString ++
        }
    } 
    return `Numbers ${countNum} : String ${countString}`
}
console.log(numString([1,'10',"hi",2,3]))