//4! =1*2*3*4
//5! =1*2*3*4*5
//6! =1*2*3*4*5*6
//7! =1*2*3*4*5*6*7
//7! =(7-1)!*7
//8! =1*2*3*4*5*6*7*8
//8! =(8-1)!*8
// n! =(n-1)!* n
function factorial(n){
    if (n == 0) {
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
let n= 5;
var result = factorial(n);
console.log(result);