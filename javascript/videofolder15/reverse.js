function reverseString(str){
    var reverse =" ";
    for(var i= 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello vai";
var forAlien = reverseString(statement);
console.log(forAlien);
var food = reverseString('ami tomai chini na abar bodhoy chini');
console.log(food);