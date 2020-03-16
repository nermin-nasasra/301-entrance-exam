'use strict'
var conarry=[];

function con(get,date){
    this.get=get;
    this.date=date;
   
}
conarry.push(this);
//////////////////local storage///////////////////////////////

function set(){
    var string=JSON.stringify(conarry);
    localStorage.setItem('stringdata',string);
    console.log(string);
}

function get(){
    var string=localStorage.getItem('stringdata');
    conarry=JSON.parse(string);
   render();
}

get();

/////////////////////render/////////////////////////////
function render(){
var container=document.getElementById('ul');
var i;
while(i>0){
var li1=document.createElement('li');
li1.setAttribute(conarry[0]);
li1.appendChild(container);

var li2=document.createElement('li');
li2.setAttribute(conarry[1]);
li2.appendChild(container);

}
set();
}
///////////////////form////////////////////////////////
var form2=document.getElementById('form');
form2.addEventListener('submit',function(event){

event.preventDefault();



var get=event.target.get.value;
var date=event.target.date.value;

var obj=new con(get,date);


render();
form2.reset();

})
render();
/////////////////////date function/////////////////////////////////

function year(){
var d = new Date();
// document.getElementById("lab").innerHTML = d.getDate();
// document.getElementById("lab").innerHTML = d.getMonth() + 1;
document.getElementById("lab3").innerHTML = d.getFullYear();
}


function day(){
    var d = new Date();
document.getElementById("lab2").innerHTML = d.getDate();
}


function month(){
    var d = new Date();
    document.getElementById("lab").innerHTML = d.getMonth() + 1;
}

day();
month();
year();
