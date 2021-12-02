// 7 . Insert a digit and a number. Check whether the digits contains in the number or not.
function includes1(a,b){
    let params1 = a + ""
    let str = params1.split("");
    for(let i = 0;i < str.length; i++){
    
        if(Number(str[i].includes(b))){
            console.log("yes") 
        }else{
           console.log("no") 
        }
    }
    
    
    
        
}
includes1(46,5)