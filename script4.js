// . Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.


function multiple1(params) {
   
    if(params % 3 === 0 && params % 5 === 0 && params % 7 ===0){
        console.log(`${params} is a multiple 3, 5, 7`)
    } else if(params % 3 === 0 && params % 5 === 0){
        console.log(`${params} is a multiple 3, 5`)
    }else if(params % 5 === 0 && params % 7 ===0){
        console.log(`${params} is a multiple 5, 7`)
    }else if(params % 3 === 0 && params % 7 ===0){
        console.log(`${params} is a multiple 3, 7`)
    }else if(params % 3 === 0){
        console.log(`${params} is a multiple 3`)
    }else if(params % 5 === 0){
        console.log(`${params} is a multiple 5`)
    }else if(params % 7 === 0){
        console.log(`${params} is a multiple 7`)
    }else{
        console.log(`${params} is  not a multiple 3,5,7`)
    }
    
    
    
    
}
multiple1(35)