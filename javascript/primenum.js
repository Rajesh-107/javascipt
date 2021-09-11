//var n = 18;
//for (i = 2; i < n-1; i++){
  //  console.log(n/i);
//}

function prime(n){
    for(i =2; i<n ; i++){
        if (n%i == 0) {
            return ' Not a prime Number';
        } 
            return'Your number is prime number';
        
    }

}
var result = prime(79);
console.log(result);