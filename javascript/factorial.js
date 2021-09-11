function factorial(n){
    var factorial = 1;
    for(var i= 1; i<= n; i++){
        factorial = factorial*i;
    }
    return factorial;
}

var result = factorial(5);
console.log(result);

//var factorial = 1;
//for(var i = 1; i<=10; i++){
    //factorial = factorial*i;
    //console.log(i, factorial);
//}

