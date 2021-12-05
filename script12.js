// 12 Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
// words from the array.

function compLite(str,words){
    let newArr = [];
    let index = 0;
    let arr = str.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "_"){
            newArr.push(words[index])
            index++
        }else{
            
        }
        return newArr.join("")
    }

}
console.log(compLite("_ we have a _",["Houston", "problem"]))