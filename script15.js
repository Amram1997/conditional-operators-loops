 //17. . Given a sentence as a string. Split it according to space and comma and create an array consisting of
//the words of the array. The last word should not contain the last . or ! .
 
 function stringSplit(a){
    let strSpSplit = a.split(" ");
    return strSpSplit
 }
 console.log(stringSplit("May the Force be with you."))