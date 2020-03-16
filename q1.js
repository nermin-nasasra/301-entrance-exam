'use strict'
var array =[1,2,3,4,5];
var a=4;
var count;
function greaterThan(){
count=0;
    for(var i=0;i<array.length;i++){
        if(a>array[i]){
count=count+1;
            
        }
    }
console.log(count);

}
greaterThan();