// as the progam prints all the 6s bcoz the  varible i is reffred every time
// function x(){
//     for(var i=0;i<=5;i++){
//         setTimeout(function (){
//             console.log(i);        // 6 6 6 6 6 
//         },i*1000);
//     }
//     console.log("The Counter :: ");
// }
// x();


//using var
function x(){
    for(var i=1;i<=5;i++){
        function y(j){
            setTimeout(function (){
                console.log(j);
            },j*1000);
        }
        y(i);
    }   
    console.log("Var Counter :: ");
}
x();



//using let 
function z(){
    for(let i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("The Let Counter :: ");
}
z();