var numbers = [23, 45, 56,6 , 65,45, 45];
function arraySum (numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++){
         var element = numbers[i];
         sum= sum+element;

}
return sum;
}
var result = arraySum(numbers);
console.log("total of numbers : ", result);

//var sum = 0;
//for(var i = 0; i<numbers.length; i++){
   // var element = numbers[i];
 //   sum= sum+element;
//}
//console.log("total of numbers : ", sum);