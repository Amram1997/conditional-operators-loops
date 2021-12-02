// 10. Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =
//ak-1 + ak-2)

function fibon1(n){
      		let result=[0,1];
     		for(let i = 2;i <= n; i++){
      			result.push(result[i-2]+result[i-1])
                
     		}
      		return result
     	}
      	console.log(fibon1(10))