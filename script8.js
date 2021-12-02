// 9 . Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

function primeNumber(s){
    let b = true;
    for(let i = 2;i < s; i++){
        if(s % i === 0){
            b = false;
            break;
        }
    }
    if (b) {
        console.log("yes")
    }else{
        console.log("no")
    }
}

primeNumber(63)