//Function declartion or Function statement
function greet(){
    console.log("Hello World!!!");
}
greet();
//function expression 
var a= function (){
    console.log("In A......");
}
a();
//anonymus function 
// function without name is called anonymus function
var b=function (){
    console.log("in B....");
}
b();

//named function expression
var c= function fun(){
    console.log("in fun.....");
}
//First class function
//function can passed inside another function , they can be used as values ,they can return functions 
function get(){
    return 2;
}

function isEvenOrOdd(n){
    if(n%2==0){
        return ()=>"Even";
    }
    else{
        return ()=>"Odd";
    }
}

console.log("2 is :: ",isEvenOrOdd(get())());

//arrow function
var d=()=>{
    console.log("in D...");
}
d();