// javascript is a Synchronus single threaded programming lang
setTimeout(function (){         // callback function    
    console.log("Conunter!!!!");  
},3000);
function x(y){
    console.log("X");
    y();
}
x(function y(){
    console.log("Y");
});