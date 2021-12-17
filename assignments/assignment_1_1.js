function add(a){
    return a();
}
function test(){
    return 10;
}
console.log(add(test)); //Function as a parameter to another Function