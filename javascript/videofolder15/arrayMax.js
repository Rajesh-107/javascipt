var marks = [39, 45, 66 ,98 , 67,88,86];
var max = marks[0];
for( var i= 0; i<marks.length; i++){
    var element= marks[i];
    if(element>max){
        max = element;
    }

}
console.log("Hieght value is : ", max );